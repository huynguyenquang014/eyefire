$(document).ready(function() {
    $("#FileInput").on('change', function(e) {
        var labelVal = $(".title").text();
        var oldfileName = $(this).val();
        fileName = e.target.value.split('\\').pop();

        if (oldfileName == fileName) { return false; }
        var extension = fileName.split('.').pop();

        if ($.inArray(extension, ['jpg', 'jpeg', 'png']) >= 0) {
            $(".filelabel i").removeClass().addClass('fa fa-file-image-o');
            $(".filelabel i, .filelabel .title").css({ 'color': '#FFF' });
            $(".filelabel").css({ 'border': ' 1px solid #FFF' });
        } else if (extension == 'pdf') {
            $(".filelabel i").removeClass().addClass('fa fa-file-pdf-o');
            $(".filelabel i, .filelabel .title").css({ 'color': 'red' });
            $(".filelabel").css({ 'border': ' 2px solid red' });

        } else if (extension == 'doc' || extension == 'docx') {
            $(".filelabel i").removeClass().addClass('fa fa-file-word-o');
            $(".filelabel i, .filelabel .title").css({ 'color': '#fff' });
            $(".filelabel").css({ 'border': ' 1px solid #FFF' });
        } else {
            $(".filelabel i").removeClass().addClass('fa fa-file-o');
            $(".filelabel i, .filelabel .title").css({ 'color': '#fff' });
            $(".filelabel").css({ 'border': ' 1px solid #fff' });
        }

        if (fileName) {
            if (fileName.length > 35) {
                $(".filelabel .title").text(fileName.slice(0, 30) + '...' + extension);
            } else {
                $(".filelabel .title").text(fileName);
            }
        } else {
            $(".filelabel .title").text(labelVal);
        }
    });
})