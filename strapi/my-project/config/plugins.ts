export default ({ env }) => ({
  upload: {
    config: {
      provider: 'supabase',
      providerOptions: {
        url: env('SUPABASE_URL'),
        apiKey: env('SUPABASE_API_KEY'),
        bucket: env('SUPABASE_BUCKET'),
      },
    },
  },
});
