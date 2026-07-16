-- Fix: Signed-in users could execute SECURITY DEFINER functions in public schema.
-- Replace has_role() usage with inline RLS-safe subqueries, drop the exposed
-- SECURITY DEFINER function, and revoke EXECUTE on trigger helper functions.

-- 1. Recreate admin policies on events without calling a SECURITY DEFINER function.
DROP POLICY IF EXISTS "Admins delete events" ON public.events;
DROP POLICY IF EXISTS "Admins update events" ON public.events;
DROP POLICY IF EXISTS "Admins insert events" ON public.events;

CREATE POLICY "Admins delete events"
  ON public.events FOR DELETE
  TO authenticated
  USING (EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = auth.uid() AND role = 'admin'::public.app_role
  ));

CREATE POLICY "Admins update events"
  ON public.events FOR UPDATE
  TO authenticated
  USING (EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = auth.uid() AND role = 'admin'::public.app_role
  ))
  WITH CHECK (EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = auth.uid() AND role = 'admin'::public.app_role
  ));

CREATE POLICY "Admins insert events"
  ON public.events FOR INSERT
  TO authenticated
  WITH CHECK (EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = auth.uid() AND role = 'admin'::public.app_role
  ));

-- These inline EXISTS subqueries are safe: public.user_roles has an RLS
-- policy ("Users read own roles") that lets each user read their own row,
-- so the check for `user_id = auth.uid()` works without needing a
-- SECURITY DEFINER helper. This avoids the infinite-recursion pitfall
-- because the policy queries user_roles, not events.

-- 2. Drop the exposed SECURITY DEFINER function; nothing in app code calls it.
DROP FUNCTION IF EXISTS public.has_role(uuid, public.app_role);

-- 3. Revoke EXECUTE on trigger helper SECURITY DEFINER functions.
--    Triggers run as the function/table owner, so callers never need EXECUTE.
REVOKE EXECUTE ON FUNCTION public.set_updated_at() FROM PUBLIC;
REVOKE EXECUTE ON FUNCTION public.set_updated_at() FROM anon, authenticated;

REVOKE EXECUTE ON FUNCTION public.bootstrap_first_admin() FROM PUBLIC;
REVOKE EXECUTE ON FUNCTION public.bootstrap_first_admin() FROM anon, authenticated;