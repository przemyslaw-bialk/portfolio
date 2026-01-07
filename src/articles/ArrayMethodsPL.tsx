import CodeBlock from "../components/CodeBlock/CodeBlock";

const ArrayMethodsPL = () => {
  return (
    <div className="article">
      <h1>array methods</h1>
      <b>tablica</b> – obiekt służący do przechowywania wielu wartości w
      uporządkowanej liście, do których mamy dostęp poprzez indeks. Indeksy
      tablicy zaczynają się od 0.
      <p>
        <b>shallow copy</b> – tzw. płytka kopia. Tworzy nową tablicę, ale
        kopiuje elementy tylko na pierwszym poziomie. <b>Primitive values</b>{" "}
        (number, string, boolean itd.) są kopiowane przez wartość, natomiast
        obiekty są kopiowane przez referencję. Oznacza to, że zmiana obiektu w
        kopii wpłynie również na oryginał.{" "}
        <p>
          Zasada: używaj shallow copy, gdy tablica zawiera wyłącznie primitive
          values.
        </p>
      </p>
      <CodeBlock
        code={`const original = [1, 2, 3];
const copy = [...original]; // shallow copy
copy[0] = 99;
console.log(original); // [1, 2, 3] 
console.log(copy);     // [99, 2, 3]`}
      />
      <CodeBlock
        code={`const original = [{ a: 1 }];
const copy = [...original];
copy[0].a = 99;
console.log(original[0].a); // 99 ZMIANA RÓWNIEŻ W ORYGINALE`}
      />
      <p>
        <b>array.from()</b> - metoda służąca do tworzenia <b>shallow copy</b>.
        Alternatywa dla <b>spread operator [...arguments]</b>. Jako drugi
        argument może przyjąć funkcje.
      </p>
      <CodeBlock
        code={`Array.from("abc");
// ["a", "b", "c"]`}
      />
      <CodeBlock
        code={`Array.from([1, 2, 3], x => x * 2);
// [2, 4, 6]`}
      />
      <p>
        <b>array.of()</b> - tworzy nową tablicę z przekazanych argumentów.
        <CodeBlock
          code={`const arr = Array.of(1, "b", { name: "ala" });
// [1, "b", { name: "ala" }]`}
        />
      </p>
      <p>
        <b>at()</b> - zwraca dany element po indeksie. Jako argument przyjmuje
        indeks array. Jeśli jako argument podamy -1 to zwróci ostatni element,
        -2 przedostatni itd.
        <CodeBlock
          code={`const arr = [2,6,7];
arr.at(0); // 2
arr.at(-1) // 7 `}
        />
      </p>
      <p>
        <b>concat()</b> - łączy dwie lub więcej tablic w jedną i zwraca nową
        tablicę. Oryginalne tablice pozostają niezmienione.
        <CodeBlock
          code={`const array1 = [1, 2];
const array2 = [3, 4];
const array3 = [5, 6];
const newArray = array1.concat(array2, array3, 7, 8);

console.log(newArray);
// [1, 2, 3, 4, 5, 6, 7, 8]`}
        />
      </p>
      <p>
        <b>every()</b> - jako argument przyjmuje callback function. Zwraca true
        gdy wszystkie elementy tablicy spełniają warunek. Iteruje po elementach
        tablicy i sprawdza warunek dla każdego elementu. Jeśli jeden z nich to
        false to metoda zwraca false dla całości tablicy.
        <CodeBlock
          code={`const highScore = (currentScore) => currentScore > 10
const arr = [11, 20, 15, 22, 3];
console.log(arr.every(highScore)); // false 
`}
        />
      </p>
      <p>
        <b>fill()</b> - metoda służąca do wstawiania elementów do tablicy.
        Pierwszy argument to value. Drugi opcjonalny to start index (0 based).
        Trzeci, również opcjonalny to end index (0 based).
        <CodeBlock
          code={`const array = [1, 2, 3, 4];

// Fill with 0 from position 2 until position 4
console.log(array.fill(0, 2, 4));
// Expected output: Array [1, 2, 0, 0]

// Fill with 5 from position 1
console.log(array.fill(5, 1));
// Expected output: Array [1, 5, 5, 5]

console.log(array.fill(6));
// Expected output: Array [6, 6, 6, 6]
`}
        />
      </p>
    </div>
  );
};

export default ArrayMethodsPL;
