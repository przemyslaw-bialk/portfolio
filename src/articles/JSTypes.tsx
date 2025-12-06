import CodeBlock from "../components/CodeBlock/CodeBlock";

const JSTypes = () => {
  return (
    <div>
      <h3>Type zmiennych</h3>
      <p>
        Typy zmiennych dzielimy na proste (primitive types) oraz złożone
        (reference types).
        <p>Proste: undefined, null, boolean, string, number, Symbol</p>
        Złożone: obiekty (w tym tablice) JavaScript jest językiem z tzw. słabym
        typowaniem w przeciwieństwie do TypeScript. String to po prostu napis,
        ciąg znaków, np.
      </p>
      <CodeBlock code={"let name = “Aga”; //zapis w cudzysłowiu;"} />
      <p>Number oznacza liczbę</p>
      <CodeBlock code={"let age = 33; //33"} />
      <p>Typ undefined oznacza brak wartości.</p>
      <CodeBlock code={"let value; //niejawne przypisanie undefined"} />
      <p>
        Typ null oznacza pustą wartość. Typ Boolean (prawda/fałsz)- przydatny do
        wskazywania stanów aplikacji, np:
      </p>
      <CodeBlock code={"sUserLogged = false;"} />
      <p>
        Typując typ boolean zazwyczaj używa się przedrostka “is” lub “should”.
      </p>
      <h4>Obiekty</h4>
      <p>
        Obiekt możemy sobie wyobrazić jako pewnego rodzaju formę, którą
        przechowuje różne pola I funkcje, jako plan działania. Najłatwiej go
        pojąć na przykładzie metafory. Wyobraź sobie człowieka (obiekt), który
        ma imię, wiek, kolor włosów (pola służące do przechowania wartości).
      </p>
      <CodeBlock
        code={"const person = { name: 'Aga', age: 33, hair_color: ‘black’};"}
      />
      <p>
        Poszczególne pola (name, age, hair_color) odpowiadają cechą obiektu
        (człowieka). Deklarauje się je jako: nazwa pola, dwukropek, wartość (
        np. name: “Aga”) – cudzysłów w słowie Aga oznacza po prostu typ string.
        Gdybyśmy chieli dodać następne pole, należy użyć przecinka. ( np. name:
        “Aga”, age: 33) By odwołać się do wartości pola obiektu (np. do name)
        zazwyczaj stosuje się notację z kropką.
      </p>
      <CodeBlock code={"console.log(person.name); // Aga"} />
      <p>
        Możesz również użyć zapisu w nawiasami kwadratowymi, pamiętaj natomiast
        o tym, że w tych nawiasach należy podać nazwę pola w cudzysłowiu.
      </p>
      <CodeBlock code={"console.log(person[“name”]); // Aga"} />
      <p>Możliwe dojscia do obiektu:</p>
      <CodeBlock
        code={`const fieldAge = 'age';
console.log(person.age); // 33
console.log(person['age']); // 33`}
      />
      <p>Gdy nazwę pola wskazujemy jako zmienną, nie dodawaj cudzysłowiu.</p>
      <CodeBlock code={"console.log(person[fieldAge]); //33"} />
      <p>Poniższy zapis:</p>
      <CodeBlock code={"console.log(person[‘fieldAge’]); //undefined"} />
      <p>
        zwróci undefined, jako że oznacza po prostu próbę pobrania wartości pola
        o nazwie fieldAge z obiektu person. Odwołując się do nieistniejącego
        pola otrzymamy undefined.
      </p>
      <h4>TABLICE</h4>
      <p>
        Tablice podobnie jak obiekty służą do przechowywania danych. Każdy
        elemtn tablicy posiada własny index (licząc od 0), deklaruje się je przy
        użyciu nawiasów kwdratowych.
      </p>
      <CodeBlock code={"const names = [“aga”, “piotr”, “jan”];"} />
      <p>Tablice mogą przechowywać dowolne typy, w tym inne tablice.</p>
      <CodeBlock
        code={
          "const mixedValues = [50, “aga”, [“jabłko”, “gruszka”], {age: 20};"
        }
      />
      <p>
        powyższa tablica posiada cztery elementy typu: number, string, array,
        object. Aby odwołać się do określonego elementu tablicy, należy
        zastosować zapis z nawiasami kwadratowymi, podając w nich index
        szukanego elementu, przy czym trzeba pamiętać, że numeracja indeksów
        zaczyna się od zera:
      </p>
      <CodeBlock
        code={`console.log(mixedValues[0]); // 50
console.loge(mixedValues[2][1]; // jabłko
console.log(mixedValues[3].age); // 20"`}
      />
    </div>
  );
};

export default JSTypes;
