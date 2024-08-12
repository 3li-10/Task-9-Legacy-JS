let value = +prompt(`ما هو مقدار الميراث ؟`);
let wifeIndex = confirm(`هل يوجد زوجة ؟`);
let wifeVlue = 0;
if (wifeIndex == true) {
  wifeVlue = value / 8;
  value = value - wifeVlue;
}

let boysNo = +prompt(`ادخل عدد الأولاد: `);
let girlsNo = +prompt(`ادخل عدد البنات: `);
let section = boysNo * 2 + girlsNo;
let sectionValue = value / section;

let msg = `
    قيمة ميراث الزوجة : ${wifeVlue}<br>
    نصيب الذكر : ${sectionValue * 2}<br>
    نصيب الانثى : ${sectionValue}
`;

document.write(msg);
