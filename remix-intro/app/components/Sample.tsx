import { Button } from '@mantine/core';

export default function Sample() {
  const handleClick = () => {
    console.log('isWork?');
  };
  return <Button onClick={handleClick}>Hello world!</Button>;
}
