import { Data } from '@/app/page';

interface Props {
  formData: Data;
}

const View = ({ formData }: Props) => {
  const { name, skills } = formData.arrayDataOne[0];
  return (
    <>
      <h1 className=' font-bold text-2xl'>arrayDataOne[0]</h1>
      <h3 className='font-semibold text-xl'>Name : </h3>
      <div>{name && name}</div>
      <h3 className='font-semibold text-xl'>Skills : </h3>
      {skills &&
        skills.map((skill, i) => {
          return (
            <div key={i}>
              IDX : ({i}) | NAME : {skill.name}
            </div>
          );
        })}
    </>
  );
};
export default View;
