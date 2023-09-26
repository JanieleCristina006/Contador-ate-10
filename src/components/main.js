import { useState } from "react";

const Contador = () => {
  const [btn, setBtn] = useState(0);

  const botaoAdicacao = () => {
    if (btn < 10) {
      setBtn(btn + 1);
    }
  };

  const botaoSubtracao = () => {
    if (btn > -10) {
      setBtn(btn - 1);
    }
  };

  const reset = () => {
    setBtn(0);
  };

  return (
    <>
      <main>
        <div className="container">
          <h1>{btn}</h1>

          <div className="btn">
            <button onClick={botaoSubtracao}> - </button>
            <button onClick={botaoAdicacao}> + </button>
          </div>
          <button onClick={reset}>Resetar</button>
        </div>
      </main>
    </>
  );
};

export default Contador;
