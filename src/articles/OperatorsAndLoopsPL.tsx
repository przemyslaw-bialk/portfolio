import CodeBlock from "../components/CodeBlock/CodeBlock";

const OperatorsAndLoopsPL = () => {
  return (
    <div className="article">
      <h1>Operatory i pętle</h1>

      <h3>operatory logiczne</h3>
      <p>Do dyspozycji mamy 3 operatory logiczne:</p>
      <ul>
        <li>
          negacja, zapis jako <b>!</b> - odwraca wynik. Bardzo przydatne z
          typami typu <b>boolean</b> w celu sprawdzenia czy jakiś warunek NIE
          JEST spełniony.
        </li>
        <CodeBlock
          code={`5 > 10; // false
!(5 > 10); // true
!(5 < 10); // false`}
        />
        <li>
          operator AND, zapis jako <b>&&</b>. Można go tłumaczyć jako "i",
          przydatne przy sprawdzaniu wielu warunków. Zwraca <b>true</b> jeśli
          wszystkie warunki są prawdziwe. W przypadku gdy choć, któryś z nich
          będzie <b>false</b> to całe wyrażenie również zwróci <b>false</b>
        </li>
        <CodeBlock
          code={`5 > 1 && 5 < 10; // true
5 > 1 && 5 < 4; // false`}
        />
        <li>
          operator OR, zapis jako <b>||</b>. Można go tłumaczyć jako "albo".
          Zwraca <b>true</b> jeśli choć 1 warunek został spełniony.
          <CodeBlock
            code={`5 > 1 || 5 < 10; // true
5 > 1 || 5 < 4;  // true`}
          />
        </li>
      </ul>
      <h3>ternary operator</h3>
      <p>
        Ternary operator to prosta alternatywa dla <b>if</b>. Jego składnia
        wygląda następująco:
      </p>

      <p style={{ fontStyle: "italic" }}>
        warunek ? polecenie jeśli true : polecenie jeśli false;
      </p>
      <p>Załóżmy że chcemy udzielić zniżki 10% przy zakupie powyżej 500zł.</p>
      <CodeBlock
        code={`const price = 1000;
const priceToPay = price > 500 ? price * 0.9 : price; // 900`}
      />
      <h3>Switch</h3>
      <p>
        Alternatywa dla <b>else-if</b>. Ważna różnica polega na tym, że switch
        porównuje wartości '===' sprawdzając również typ. Należy pamiętać o
        słowie <b>break</b>, który powoduje zatrzymanie realizacji dalszych
        instrukcji switch. Element <b>default</b> oznacza wykonanie instrukcji,
        gdy żadne z powyższych przypadków nie zostały spełnione.
      </p>
      <CodeBlock
        code={`switch (analizowana_wartość) {
case wartość_1:
// polecenia do wykonania w przypadku wartość_1
break;
case wartość_2:
// polecenia do wykonania w przypadku wartość_2
break;
default:
// polecenia do wykonania, gdy nie dopasowano żadnego z warunków
}`}
      />
    </div>
  );
};

export default OperatorsAndLoopsPL;
