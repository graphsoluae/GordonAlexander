var saveBtn = document.getElementById("save-contact");
saveBtn.addEventListener("click", function () {



    var vcard = "BEGIN:VCARD\nVERSION:3.0\nFN;CHARSET=UTF-8:\nN: Alexander;Gordon;\nTEL;TYPE=CELL:+971505709330\nTEL;TYPE=CELL:+971557065410\nEMAIL:gordonalexandera@yahoo.com\nORG:Gordan Events\nTITLE:Manager\nADR; TYPE = WORK: ;;; Abudhabi;United Arab Emirates;;\nTITLE:\nREV:Wed Mar 22 2023 12: 55: 50 GMT + 0400(Gulf Standard Time)\nEND:VCARD";

    var blob = new Blob([vcard], { type: "text/vcard" });
    var url = URL.createObjectURL(blob);

    const newLink = document.createElement('a');
    newLink.download = "GORDON ALEXANDER" + ".vcf";
    newLink.textContent = "GORDON ALEXANDER";
    newLink.href = url;



    newLink.click();
});
