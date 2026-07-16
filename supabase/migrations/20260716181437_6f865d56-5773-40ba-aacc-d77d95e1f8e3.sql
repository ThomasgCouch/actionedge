
CREATE POLICY "Public read event-images" ON storage.objects FOR SELECT TO anon, authenticated USING (bucket_id = 'event-images');
CREATE POLICY "Admins upload event-images" ON storage.objects FOR INSERT TO authenticated WITH CHECK (bucket_id = 'event-images' AND EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = auth.uid() AND role = 'admin'));
CREATE POLICY "Admins update event-images" ON storage.objects FOR UPDATE TO authenticated USING (bucket_id = 'event-images' AND EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = auth.uid() AND role = 'admin')) WITH CHECK (bucket_id = 'event-images' AND EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = auth.uid() AND role = 'admin'));
CREATE POLICY "Admins delete event-images" ON storage.objects FOR DELETE TO authenticated USING (bucket_id = 'event-images' AND EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = auth.uid() AND role = 'admin'));
