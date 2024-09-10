import { useState } from 'react';
import useInterval from '@hooks/useInterval.ts';

import {Time} from  '@utils'
import { TimeProps } from '@components/time/types.ts';

const IntervalTimestamp = ({ data }: TimeProps) => {
  const [timestamp, setTimestamp] = useState<string>(Time.elapsedTime(Time.formatUnixNano(data)));

  useInterval(() => {
    setTimestamp(Time.elapsedTime(Time.formatUnixNano(data)));
  }, 1000);

  return <>{timestamp}</>;
};

export default IntervalTimestamp;
