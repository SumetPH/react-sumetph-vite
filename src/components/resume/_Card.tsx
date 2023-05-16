type Card = {
  title: string;
  children: any;
};

const _Card = ({ title, children }: Card) => {
  return (
    <div className="bg-gray-200 dark:bg-gray-800 rounded-xl mb-3 mx-3 p-4">
      <h2 className="font-bold text-2xl">{title}</h2>
      <div className="ml-6 my-3">{children}</div>
    </div>
  );
};

export default _Card;
