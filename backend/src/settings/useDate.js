const useDate = ({ settings }) => {
  const { botmartz_app_date_format } = settings;

  const dateFormat = botmartz_app_date_format;

  return {
    dateFormat,
  };
};

module.exports = useDate;
