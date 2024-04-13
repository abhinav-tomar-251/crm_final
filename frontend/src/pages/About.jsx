import { Button, Result } from 'antd';

import useLanguage from '@/locale/useLanguage';

const About = () => {
  const translate = useLanguage();
  return (
    <Result
      status="info"
      title={'Botmartz It Solutions'}
      subTitle={translate('Do you need help on customize of this app')}
      extra={
        <>
          <p>
            Website : <a href="https://botmartz.com/">Botmartz It Solutions</a>{' '}
          </p>
          <p>
            Linkedin :{' '}
            <a href="https://www.linkedin.com/company/botmartz-it-solutions/">
              https://www.linkedin.com/company/botmartz-it-solutions/
            </a>
          </p>
          <Button
            type="primary"
            onClick={() => {
              window.open(`https://www.linkedin.com/in/soham-sharma/`);
            }}
          >
            {translate('Contact us')}
          </Button>
        </>
      }
    />
  );
};

export default About;
