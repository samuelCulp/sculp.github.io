function updateTable(category,department ) {
    const table = document.getElementById('naming-convention-table');
    
    // Clear existing table content
    table.innerHTML = '';

    // Define naming conventions for each category
    const namingConventions = {
        'ASKIT': ['AQA-', 'ARENA-', 'ARP-', 'ASC-', 'ASKIT-', 'ATH-', 'AUDIT-', 'AV-', 'ALC-', 'BFS-',
         'BNVF-', 'CIRB-', 'COMM-', 'FA-', 'FINAD-', 'GEN-', 'GRAD-', 'HRM-', 'IACUC-', 'ID-', 'INTO-',
          'IRB-', 'ITBFS-', 'ITDS-', 'ITIS-', 'LEGAL-', 'LHL-', 'LIB-', 'LRC-', 'OSP-', 'PAGE-', 'PROV-',
           'PSEC-', 'RCOMP-', 'RF-', 'ROTC-', 'SEC-', 'SFS-', 'SHRP-', 'SHWC-', 'SIM-', 'SOD-', 'SOE-', 'SON-',
            'SOPH-', 'TUCC-', 'UABPD-', 'UHP-', 'UTH-', 'VPDA-', 'VPED-', 'VPIT-', 'VPR-', 'VPSA-', 'WEBB-',
             'WHSE-', ],
        'Surg': ['SURG'],
        '1917': ['blank'],
        'Maintenance': ['blank'],
        'COLLAT': ['blank'],
        'HSISID': ['blank'],
        'Optometry': ['SO'],
        'SOD': ['blank'],
        'WBHM': ['blank'],
        'AOC': ['blank'],
        'Callahan': ['OPH'],
        'Digital': ['blank'],
        'HSISAsset': ['blank'],
        'Huntsville': ['blank'],
        'Path': ['PATH'],
        'SOE': ['blank'],
        'Anesthesia': ['ANES'],
        'CCTSF': ['RAD', 'PHAR', 'PHARM', 'PHARMTOX', 'SURG', 'WTI'],
        'DOM': ['NEURO-', "PBN-", "PULM-", "RHEUM-", "SURGD-", "SURG-(if Children's ambulatory)", "URO-", "U*", "W*-LW-",
                  "CARD-", "CCTS-", "CDIB-", "CFRC-", "CNC-", "DOM-", "END-", "ENT-", "GEHEP-", "GGMPC-", "HEM-", "HEMONC-", "IDD-", 
                     "II-", "INTMD-", "NEPH-"],
        'HSISBA': ['blank'],
        'ICO': ['blank'],
        'PEDS': ['EN','NE', 'NN', 'NH', 'OR', 'LOW'],
        'MEIS': ['NSURG'],
        'AV': ['blank'],
        'CASIT': ['CAS'],
        'DOPM': ['blank'],
        'HSISHD': ['blank'],
        'Neuro': ['Initials-Micro-lab# or Initials-Neuro-', 'NBIO'],
        'Physical': ['blank'],
        'TvRepair': ['blank'],
        'TvRepair': ['blank'],
        'Facilities': ['OHS'],
        'HSISSYS': ['blank'],
        'OBGYN': ['blank'],
        'RepairComm': ['blank'],
        'Viva': ['blank'],

    };
    const data = {
        'ASKIT': [
            {contact: 'Alfredo Guzman', email: 'alfredo@example.com', dept: 'Central IT', phone: '123-456-7890', group: 'Group A'},
            {contact: 'Boniface Sindala', email: 'boniface@example.com', dept: 'Central IT', phone: '234-567-8901', group: 'Group B'},
            {contact: 'Michael Henderson', email: 'michael@example.com', dept: 'Central IT', phone: '345-678-9012', group: 'Group C'}
        ],
        'Surg': [
            {contact: 'Jane Doe', email: 'jane@example.com', dept: 'Surgery', phone: '456-789-0123', group: 'Group D'},
            {contact: 'John Smith', email: 'john@example.com', dept: 'Surgery', phone: '567-890-1234', group: 'Group E'}
        ],
        // Add more departments and their data as needed
    };

    // Get the appropriate naming conventions for the selected category
    const names = namingConventions[category] || [] ;

    // Determine the number of rows and columns (e.g., 5 rows, 6 columns)
    var rows = 9;
    const columns = 7;

    // Create table rows and cells
    let nameIndex = 0;
    for (let i = 0; i < rows; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < columns; j++) {
            const td = document.createElement('td');
            td.textContent = names[nameIndex] || '';
            tr.appendChild(td);
            nameIndex++;
        }
        table.appendChild(tr);
    }
    


    const tableBody = document.querySelector('#naming-convention-table tbody');
    tableBody.innerHTML = ''; // Clear previous table content

    var rows = data[department];
    if (rows) {
        rows.forEach(row => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${row.contact}</td>
                <td>${row.email}</td>
                <td>${row.dept}</td>
                <td>${row.phone}</td>
                <td>${row.group}</td>
            `;
            tableBody.appendChild(tr);
        });
    }
}

// Initialize with default table
window.onload = () => updateTable('ASKIT');
