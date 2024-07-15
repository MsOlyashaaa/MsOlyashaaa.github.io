import { surveyConfig } from '@/config/surveyConfig';
import { SURVEY_PATH } from '@/utils/consts';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();
  const path = surveyConfig[0];

  useEffect(() => {
    router.push(`${SURVEY_PATH}/${path.id}`);
  }, [path.id, router]);

  return null;
}
