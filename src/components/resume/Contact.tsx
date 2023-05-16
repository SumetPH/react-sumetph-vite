import Card from "./_Card";

const Contact = () => {
  return (
    <Card title="Contact">
      <div className="mb-2">
        <p>Email : notsumet1@gmail.com</p>
      </div>
      <div className="mb-2">
        <p>
          Github :{" "}
          <a
            className="hover:text-white"
            href="https://github.com/sumetph"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/sumetph
          </a>
        </p>
      </div>
      <div className="mb-2">
        <p>
          Portfolio :{" "}
          <a
            className="hover:text-white"
            href="https://sumetph.github.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            sumetph.github.io
          </a>
        </p>
      </div>
    </Card>
  );
};

export default Contact;
