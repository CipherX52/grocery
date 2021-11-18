var press = document.getElementById("trip");


press.addEventListener("click",fetch);

function hide(){
    document.getElementById("content").innerHTML = "";
    press.innerText = "View Grocery List";
}


function fetch(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState==4 && this.status==200){
            var response = JSON.parse(this.responseText);
            var items = response.products;
            var output = '';
            output += '<button type="button" class="btn btn-outline-primary switch" id="hide">Hide List</button>';
            output += '<table class="table table-dark table-hover table-bordered">';
            output += '<thead><tr><th scope="col">Sl No.</th>';
            output += '<th scope="col">Item Name</th>';
            output += '<th scope="col">Quantity</th>';
            output += '<th scope="col">Unit</th>';
            output += '<th scope="col">Department</th>';
            output += '<th scope="col">Notes</th></tr></thead>';
            output += '<tbody>';
            for(var item of items){
                // console.log(item.name);
                output += `<tr><th scope="row">${item.snum}</th>`;
                output += `<td>${item.name}</td>`;
                output += `<td>${item.quant}</td>`;
                output += `<td>${item.unit}</td>`;
                output += `<td>${item.dept}</td>`;
                output += `<td>${item.notes}</td></tr>`;
            }
            output += '</tbody></table>';
            document.getElementById("content").innerHTML = output;
        }
    }
    xhttp.open("GET","./badge.json",true);
    xhttp.send();
}

