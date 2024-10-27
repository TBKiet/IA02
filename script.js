function calculate(event, form) {
    event.preventDefault();
    const number1 = parseFloat(form.number1.value);
    const number2 = parseFloat(form.number2.value);
    const operate = form.operate.value;
    let result = 0;
    document.getElementById("notification").innerHTML = ""
    if (isNaN(number1) && isNaN(number2)) {
        document.getElementById("notification").innerHTML = "<b>Giá trị nhập</b> ở ô <i>Số thứ nhất</i> và <i>Số thứ hai</i> <b>không phải là số</b>";
        return;
    }
    else if (isNaN(number1)) {
        document.getElementById("notification").innerHTML = "<b>Giá trị nhập </b> ở ô <i>Số thứ nhất</i> <b>không phải là số</b>";
        return;
    }
    else if (isNaN(number2)) {
        document.getElementById("notification").innerHTML = "<b>Giá trị nhập </b> ở ô <i>Số thứ hai</i> <b>không phải là số</b>";
        return;
    }


    if (form.operate.value == "") {
        document.getElementById("notification").innerHTML = "Hãy chọn phép toán";
        return;
    }

    if (operate == "add")
        result = number1 + number2;
    else if (operate == "subtract")
        result = number1 - number2;
    else if (operate == "multiply")
        result = number1 * number2;
    else {
        if (number2 == 0) document.getElementById("notification").innerHTML = "Không thể chia cho 0";

        result = number1 / number2;
    }

    document.getElementById("result").value = result;

}