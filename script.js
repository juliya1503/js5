function words() {
    let count = 0;
    let vowelSearch = ["а", "А", "о", "О", "и", "И", "е", "Е", "ё", "Ё", "э", "Э", "ы", "Ы", "у", "У", "ю", "Ю", "я", "Я"];
    let text = (" Волны катятся одна за другою \n С плеском и шумом глухим \n Люди проходят ничтожной толпою \n Также один за другим. \n Волнам их воля и холод дороже \n Знойных полудня лучей; \n Люди хотят иметь души… \n И что же? \n Души в них волн холодней!");
    alert(text);
    for (var i = 0; i < text.length; i++)
        for (var vowel = 0; vowel < vowelSearch.length; vowel++)
            if (text[i] === vowelSearch[vowel]) {
                ++count;
                break;
            }
    return count ? count : "Гласные не найдены";
    
}
alert(words() + ' Гласных буквы');

