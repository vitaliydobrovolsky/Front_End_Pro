        table = document.createElement('table');
        table.style.textAlign = 'center';
        table.style.margin = '50px'
        table.style.border = 'solid, 5px'
        for (i=1; i<10; i++) {
            row = document.createElement('tr');
            for (j=1; j<10; j++) {
                cell = document.createElement(i === 1 || j === 1 ? 'th' : 'td');
                cell.appendChild(document.createTextNode(i*j));
                cell.style.padding = '10px';
                cell.style.width = '40px';
                cell.style.border = 'solid, 1px'
                cell.style.color = 'blue'
                row.appendChild(cell);
            }
            table.appendChild(row);
        }
        document.body.appendChild(table);
