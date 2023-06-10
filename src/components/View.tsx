const View = ({ formData }: any) => {
  console.log('formData : ', formData);
  const formattedData = JSON.stringify(formData, null, 2);
  return (
    <div>
      <h2 className=' text-2xl font-bold py-2'>FORM DATA VISUALIZE 👇</h2>
      <pre className='border bg-black text-white p-4 font-semibold'>
        {formattedData}
      </pre>
    </div>
  );
};
export default View;
