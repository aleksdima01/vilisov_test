import { useState } from "react";

function Wish() {
    const [wishes, setWishes] = useState([]);
    const [text, setText] = useState('');

    const newWish = () => {
        if (text.trim() === '') {
            return;
        }
        setWishes([...wishes, text]);
        setText("");
    }
    const updateText = (e) => {
        setText(e.target.value)
    }
    const deleteWish = (id) => {
        const newArray = Array.from(wishes);
        newArray.splice(id, 1);
        setWishes(newArray);
    }
    return (
        <div style={{ textAlign: 'start', margin: '20px', fontSize: '20px' }}>
            <div style={{ marginBottom: '30px', display: "flex" }}>
                <input onChange={updateText} value={text} type="text" name="wish_input" id="wish_input" style={{ fontSize: '20px', borderRadius: '4px', border: "1px solid black", outline: 'none' }} />
                <button onClick={newWish} style={{ color: 'rgba(70, 71, 71, 0.92)', backgroundColor: '#00FF7F', marginLeft: '20px', border: "2px solid rgb(35, 228, 41)", borderRadius: '4px', height: '30px' }} type="button">Добавить желание</button >
            </div>

            {/* Подход к стилям выбран так в соответсвии с заданием. Я бы сделал через CSS-файлы. Кнопки стилизованы для хорошей видимости и понимания. В зеленых тонах для добавления, в красных тонах для удаления. Также вся рабочая зона вынесена в левый верхний угол а не оставлена в центре, для удобства работы.*/}

            <div><h4>Список желаний:</h4>
                {
                    wishes.length !== 0 ?
                        wishes.map((wish, index) =>
                            <li key={index}>{wish} <button onClick={() => deleteWish(index)} style={{ color: 'rgba(70, 71, 71, 0.92)', backgroundColor: '#FF8C00', marginLeft: '20px', border: "2px solid rgb(248, 31, 89)", borderRadius: '4px' }} >Удалить</button></li>) :
                        <p>Желаний пока нет!</p>
                }
            </div>
        </div >
    );
}

export default Wish;

// Для работы с бэкендом можно использовать fetch запросы внутри блока try catch.
// Также можно использовать redux и createAsyncThunk для формирования асинхронных запросов к бекенду и хранения результатов запросов в глобальном Store.