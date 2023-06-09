'use client';

const View = ({ formData }: any) => {
  return <pre>{JSON.stringify(formData, null, 2)}</pre>;
};
export default View;
