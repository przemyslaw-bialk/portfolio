import CodeBlock from "../components/CodeBlock/CodeBlock";

const JSTypes = () => {
  return (
    <div className="article">
      <h1>Typy zmiennych</h1>
      <p>
        Typy zmiennych dzielimy na proste (primitive types) oraz złożone
        (reference types).
      </p>
      <p>Proste: undefined, null, boolean, string, number, Symbol.</p>
      <p>
        Złożone: obiekty (w tym tablice). JavaScript jest językiem z tzw. słabym
        typowaniem w przeciwieństwie do TypeScript. String to po prostu napis,
        ciąg znaków, np.:
      </p>
      <CodeBlock code={'let name = "Aga"; // zapis w cudzysłowie'} />
      <p>Number oznacza liczbę.</p>
      <CodeBlock code={"let age = 33;"} />
      <p>Typ undefined oznacza brak wartości.</p>
      <CodeBlock code={"let value; // niejawne przypisanie undefined"} />
      <p>
        Typ null oznacza pustą wartość. Typ boolean (prawda/fałsz) jest
        przydatny do wskazywania stanów aplikacji, np.:
      </p>
      <CodeBlock code={"isUserLogged = false;"} />
      <p>
        Typując zmienne boolean zazwyczaj używa się przedrostka "is" lub
        "should".
      </p>
      <h3>Obiekty</h3>
      <p>
        Obiekt możemy sobie wyobrazić jako pewnego rodzaju formę, która
        przechowuje różne pola i funkcje jako plan działania. Najłatwiej pojąć
        to na przykładzie metafory: wyobraź sobie człowieka (obiekt), który ma
        imię, wiek i kolor włosów (pola służące do przechowywania wartości).
      </p>
      <CodeBlock
        code={"const person = { name: 'Aga', age: 33, hair_color: 'black' };"}
      />
      <p>
        Poszczególne pola (name, age, hair_color) odpowiadają cechom obiektu
        (człowieka). Deklaruje się je jako: nazwa pola, dwukropek, wartość (np.
        name: "Aga") — cudzysłów w słowie "Aga" oznacza typ string. Gdybyśmy
        chcieli dodać następne pole, należy użyć przecinka (np. name: "Aga",
        age: 33). By odwołać się do wartości pola obiektu (np. do "name"),
        zazwyczaj stosuje się notację z kropką.
      </p>
      <CodeBlock code={"console.log(person.name); // Aga"} />
      <p>
        Możesz również użyć zapisu w nawiasach kwadratowych — pamiętaj jednak,
        że w tych nawiasach należy podać nazwę pola w cudzysłowie.
      </p>
      <CodeBlock code={'console.log(person["name"]); // Aga'} />
      <p>Możliwe dojścia do obiektu:</p>
      <CodeBlock
        code={`const fieldAge = 'age';
console.log(person.age);        // 33
console.log(person['age']);     // 33`}
      />
      <p>Gdy nazwę pola wskazujemy jako zmienną, nie dodajemy cudzysłowu.</p>
      <CodeBlock code={"console.log(person[fieldAge]); // 33"} />
      <p>Poniższy zapis:</p>
      <CodeBlock code={'console.log(person["fieldAge"]); // undefined'} />
      <p>
        zwróci undefined, ponieważ oznacza próbę pobrania wartości pola o nazwie
        "fieldAge" z obiektu person. Odwołując się do nieistniejącego pola
        otrzymamy undefined.
      </p>
      <h3>Tablice</h3>
      <p>
        Tablice, podobnie jak obiekty, służą do przechowywania danych. Każdy
        element tablicy posiada własny indeks (licząc od 0). Deklaruje się je
        przy użyciu nawiasów kwadratowych.
      </p>
      <CodeBlock code={'const names = ["aga", "piotr", "jan"];'} />
      <p>Tablice mogą przechowywać dowolne typy, w tym inne tablice.</p>
      <CodeBlock
        code={
          'const mixedValues = [50, "aga", ["jabłko", "gruszka"], { age: 20 }];'
        }
      />
      <p>
        Powyższa tablica posiada cztery elementy typu: number, string, array,
        object. Aby odwołać się do określonego elementu tablicy, należy
        zastosować nawiasy kwadratowe podając indeks szukanego elementu —
        pamiętaj, że numeracja zaczyna się od zera:
      </p>
      <CodeBlock
        code={`console.log(mixedValues[0]);      // 50
console.log(mixedValues[2][1]);   // gruszka
console.log(mixedValues[3].age);  // 20`}
      />
      <h3>Zmienne</h3>
      <p>
        Zmienne można zadeklarować przy użyciu słowa <b>var</b> <b>const</b>{" "}
        <b>let</b>. Deklaracja za pomocą <b>var</b> nie jest zalecana i dlatego
        nie będziemy też z niej tu korzystać. Słowo <b>let</b> służy do
        deklaracji zmiennych, a <b>const</b> jest przeznaczone do tzw. stałych.
        W większości przypadków użyamy deklaracji za pomocą słowa <b>const</b>.
        Jeśli zadeklarujemy zmienną <b>let</b> to możemy zmienić zarówną jej
        wartość jak i typ.
      </p>
      <CodeBlock
        code={`let value = 10;
typeof value; // 'number'
value = 'jakiś tekst';
typeof value; // 'string'`}
      />
      <p>
        Próbując takiego samego zapisu za pomocą <b>const</b> otrzymamy error.
      </p>
      <CodeBlock
        code={`const age = 20;
age = 5; // TypeError: Assignment to constant variable.
age; // 20`}
      />
    </div>
  );
};

export default JSTypes;
