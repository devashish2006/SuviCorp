create extension if not exists pgcrypto;

create table if not exists public.consultation_requests (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  source text not null default 'website_cta',
  created_at timestamptz not null default now()
);

alter table public.consultation_requests enable row level security;

create policy "Allow service role insert"
on public.consultation_requests
for insert
to service_role
with check (true);
