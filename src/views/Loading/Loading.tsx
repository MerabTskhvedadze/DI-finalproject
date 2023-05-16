import { Spin } from 'antd';

export const Loading = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <Spin tip='Loading' size='large'>
        <div className='pl-12' />
      </Spin>
    </div>
  );
};
