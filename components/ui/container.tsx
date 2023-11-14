interface ContainerProps {
 children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({
 children
}) => {
 return ( 
   <div className="mx-auto justify-center max-w-8xl">
     {children}
   </div>
  );
};

export default Container;