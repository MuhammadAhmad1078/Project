interface Props {
  title?: string
  type?: 'pageHeading' | 'sectionHeading'
  children?: React.ReactNode;
  fontSize?: string;
  color?: string; 
  weight?: string;
  className?: string;
  headClass?: string;
  subheadClass?: string;
  onClick?: () => void
}

const Heading: React.FC<Props> = ({title, type, children, fontSize='text-lg', color='#fff', weight='font-medium', headClass='', subheadClass, className, onClick}) => {
 
  return (
    <>
        {
          type === 'pageHeading' ?
          <h1 className={`font-bold text-lg text-[#FCFCFD] mb-5 ${headClass}`}>
              {title}
          </h1> :
          type === 'sectionHeading' ?
          <p className={`m-0 mb-5 text-base text-[#FCFCFD] font-bold ${subheadClass}`}>
              {title}
          </p>
          : 
          <p className={`${fontSize} ${color} ${weight} ${className}`} onClick={onClick}>
            {
              children
            }
          </p>
        }
    </>
  );
}

export {Heading}
