const useAppSettings = () => {
  let settings = {};
  settings['botmartz_app_email'] = 'noreply@botmartzapp.com';
  settings['botmartz_base_url'] = 'https://crm-alpha-bice.vercel.app/';
  return settings;
};

module.exports = useAppSettings;
