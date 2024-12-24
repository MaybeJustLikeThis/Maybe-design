import Watermark from "./Watermark";

const App = () => {
  return (
    <Watermark
      content={["测试水印", "测试"]}//内容
      gap={[0, 0]}//间距
      offset={[0, 0]}//左上角空白距离
      fontStyle={{
        color: "bule",
      }}
    >
      <div style={{ height: 800 }}>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quod
          deserunt quidem quas in rem ipsam ut nesciunt asperiores dignissimos
          recusandae minus, eaque, harum exercitationem esse sapiente? Eveniet,
          id provident!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quod
          deserunt quidem quas in rem ipsam ut nesciunt asperiores dignissimos
          recusandae minus, eaque, harum exercitationem esse sapiente? Eveniet,
          id provident!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quod
          deserunt quidem quas in rem ipsam ut nesciunt asperiores dignissimos
          recusandae minus, eaque, harum exercitationem esse sapiente? Eveniet,
          id provident!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quod
          deserunt quidem quas in rem ipsam ut nesciunt asperiores dignissimos
          recusandae minus, eaque, harum exercitationem esse sapiente? Eveniet,
          id provident!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quod
          deserunt quidem quas in rem ipsam ut nesciunt asperiores dignissimos
          recusandae minus, eaque, harum exercitationem esse sapiente? Eveniet,
          id provident!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quod
          deserunt quidem quas in rem ipsam ut nesciunt asperiores dignissimos
          recusandae minus, eaque, harum exercitationem esse sapiente? Eveniet,
          id provident!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quod
          deserunt quidem quas in rem ipsam ut nesciunt asperiores dignissimos
          recusandae minus, eaque, harum exercitationem esse sapiente? Eveniet,
          id provident!
        </p>
      </div>
    </Watermark>
  );
};

export default App;
