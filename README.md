# Results

Open [https://msolyashaaa.github.io/](https://msolyashaaa.github.io/) with your browser to see the result.

# Getting Started

Run the development server:

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) with your browser.


Build app:

```bash
npm run build
```


# Review fixes

## <span style="color: #06f106; font-weight: bold"> Done</span>

✅ для отримання даних зі стору краще створити окремий файл із селекторами, аніж створювати селектор щоразу при використанні хука useSelector((state: RootState) => state.survey.answers); <br />
✅ краще створити та використовувати по проекту типізовні useSelector & useDispatch, як це радить робити документація <br />
✅ замість редиректу з рутової сторінки на перше питання в компоненті "Home", краще використати редирект, описаний в next.config.js <br />
✅ намагатися використовувати SEF URLs <br />
✅ "nextId" в конфізі краще вказувати не для кожної кнопки відповіді степа окремо, а на рівні самого степу <br />
✅ намагатися розділяти логіку та представлення компонента <br />
✅ немає необхідності використання усіх 3-х параметрів router.push(${SURVEY_PATH}/${nextId}, undefined, { locale }); <br />

## <span style="color: #ffee58; font-weight: bold"> Notes</span>

### 💬 prevAnswer краще також зберігати в конфізі <br />
>⤹ *Хочу звернути увагу на те, що структура наших питань не є лінійною, і до деяких питань можна потрапити з кількох різних точок. Через це зберігати prevAnswer у конфігурації є недоцільно. Це не тільки ускладнює структуру, але й створює зайві залежності, які важко підтримувати.* <br /> <br />

### 💬 не працює інтерполяція на питанні з айді 4 <br /> 
>⤹ *"{Gender} {who have children (if have children)} need a slightly different approach to improve their relationship. Which statement best describes you?"
<br />Хочу повідомити, що я не можу вставити інформацію про дітей у це питання, оскільки до цього не було запитання, щоб отримати відповідну інформацію.Для того, щоб коректно відображати інформацію про наявність дітей, необхідно спершу додати запитання, яке б збирало ці дані.*<br /><br />

### 💬 замість самописної "replacePlaceholders" краще використати готове рішення, наприклад https://www.geeksforgeeks.org/lodash-_-template-method/ <br />
>⤹ *Хочу зазначити, що використовувана функція replacePlaceholders покриває більший функціонал, який включає врахування капіталізації першої літери під час заміни місць для вставки значень. Відповідний коментар був доданий до функції для пояснення її роботи.*<br />
