    addEventListener("change", function() {
    const select = document.getElementById("kmlFileSelect");
    fetch('Kaohsiung.json')
        .then(function(response){
        return response.json();
    })
        .then(function(obj){
        console.log(obj);
        //���o�ﶵ�� ID
        const id = select.options[select.selectedIndex].id
        console.log(id);
        let num = id-1;
        console.log("num:"+num);
        // ���o��椸��
        const table = document.querySelector(".table");
        // ���o�椸��
        const cell11 = table.rows[1].cells[1];
        const cell12 = table.rows[1].cells[2];
        const cell13 = table.rows[1].cells[3];
        const cell14 = table.rows[1].cells[4];
        // ����檺��r
        cell11.textContent =obj[num].name;
        cell12.textContent =obj[num].hr24;
        cell13.textContent =obj[num].AREA;
        cell14.textContent =obj[num].depth;

        //��X�T��24hr�̱��񪺨ƥ�
        let arr = [];
        for(let i=0;i<obj.length;i++){
            arr.push(Math.abs(obj[i].hr24-obj[num].hr24));//�����
            
        }
        console.log("arr:"+arr);
        //�barr��X�Pobj[num].hr24�t�ȳ̤p���T��
        let arr2 = [];
        let arrcase = [];
        for(let i=0;i<4;i++){
            let min = Math.min(...arr);//��Xarr���̤p���Ʀr
            arr2.push(min);
            arr.splice(arr.indexOf(min),1);
        }
        console.log("arr2:"+arr2);
        //�Ҧ�arr2�۹�����obj[num].hr24��index
        for(let i=1;i<4;i++){
            for(let j=0;j<obj.length;j++){
                if(Math.abs(obj[j].hr24-obj[num].hr24) == arr2[i]){
                    arrcase.push(j+1);//no
                    table.rows[i+1].cells[1].textContent = obj[j].name;
                    table.rows[i+1].cells[2].textContent = obj[j].hr24;
                    table.rows[i+1].cells[3].textContent = obj[j].AREA;
                    table.rows[i+1].cells[4].textContent = obj[j].depth;
                }
            }
        }
        console.log("arrcase:"+arrcase);

/*
    // �M����椤���C����
    for (let i = 1; i < table.rows[0].cells.length; i++) {
        // ���o�椸��
        const cell = table.rows[1].cells[i];

        // ����檺��r
        cell.textContent = "This is column " + obj[i].name;
    }
    */
/*
        //�NJSON�ɮפ�����Ƴv�@�[�Jselect������
        obj.forEach(function(item) {
        const option = document.createElement("option");
        option.value = item.kml;
        option.text = item.name;
        select.appendChild(option);
        });
*/
    });
});
