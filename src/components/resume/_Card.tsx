type Card = {
  title: string;
  children: React.ReactNode;
};

const _Card = ({ title, children }: Card) => {
  return (
    <div className="bg-gray-200 dark:bg-gray-800 rounded-xl py-6 px-6 h-full">
      <h2 className="font-bold text-2xl mb-3">{title}</h2>
      <div className="ml-6">{children}</div>
    </div>
  );
};

export default _Card;
