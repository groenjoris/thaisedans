const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default async function LocaleRoot({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <meta httpEquiv="refresh" content={`0;url=${basePath}/${locale}/home`} />
  );
}
