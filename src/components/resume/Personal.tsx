import Profile from "./img/profile.png";
import Card from "./_Card";

const Personal = () => {
  return (
    <Card title="Personal">
      <img className="w-32 h-32 rounded-full mx-auto" src={Profile} alt="" />
      <h2 className="font-bold text-2xl">Personal</h2>
      <p>
        Name : Sumet Phongphila
        <br />
        Birthday: 11 February 1997
        <br />
        Nationality : Thai
      </p>
    </Card>
  );
};

export default Personal;
