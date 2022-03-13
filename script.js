var words = [
    {number:1,direction:'across',row:1,column:4,clue:'Los compuestos de coordinación son fruto de la interacción entre un... ... que actúa como ácido de Lewis, principalmente de transición, y ligandos que son generalemente bases de Lewis.',answer:'centrometalico',hint:'https://chem.libretexts.org/Bookshelves/Inorganic_Chemistry/Supplemental_Modules_and_Websites_(Inorganic_Chemistry)/Coordination_Chemistry'},
    {number:2,direction:'down',row:1,column:7,clue:'El intercambio metálico de un ligando, comúnmente utilizado para la síntesis de carbenos se denomina',answer:'transmetalacion',hint:'https://en.wikipedia.org/wiki/Transmetalation#:~:text=Transmetalation%20(alt.,%2C%20halogen%2C%20or%20pseudohalogen%20group'},
    {number:3,direction:'down',row:1,column:16,clue:'Compuesto que posee al menos un enlace metal-metal',answer:'cluster',hint:'https://www.britannica.com/science/cluster-compound'},
    {number:4,direction:'across',row:4,column:9,clue:'Las estructuras de tipo Fisher, Schock y NFC son tipos de',answer:'carbenos',hint:'https://chem.libretexts.org/Bookshelves/Organic_Chemistry/Supplemental_Modules_(Organic_Chemistry)/Fundamentals/Reactive_Intermediates/Carbenes'},
    {number:5,direction:'down',row:4,column:23,clue:'¿Cuántos electrones poseen los carbenos en su capa de valencia?',answer:'seis',hint:'http://institut-chimie.unistra.fr/fileadmin/upload/UMR7177/Documents/Equipes_de_recherche/cours_L3_2014_15_6.pdf'},
    {number:6,direction:'down',row:5,column:1,clue:'Los carbonilos, debido a las vacancias en orbitales homo y lumo y la posibilidad de transiciones electrónicas hacen que tengan una excelente',answer:'conductividad',hint:'https://www.definicionabc.com/ciencia/conductividad.php'},
    {number:7,direction:'across',row:5,column:16,clue:'Los carbenos angulares deben tener un estado de multiplicidad...',answer:'triplete',hint:'https://www.intechopen.com/chapters/79135'},
    {number:8,direction:'down',row:5,column:19,clue:'Los carbonilos aceptan densidad electrónica a través del orbital molecular...',answer:'pi',hint:'http://www.ilpi.com/organomet/carbonyl.html'},
    {number:9,direction:'down',row:5,column:21,clue:'El efecto mesomérico está relacionado directamente con la...',answer:'estructura',hint:'https://es.wikipedia.org/wiki/Efecto_mesom%C3%A9rico'},
    {number:10,direction:'across',row:6,column:1,clue:'Estructura que posee al menos un enlace metal-carbono se denomina compuesto...',answer:'organometalico',hint:'https://es.wikipedia.org/wiki/Compuesto_organomet%C3%A1lico#:~:text=Formalmente%2C%20los%20compuestos%20organomet%C3%A1licos%20son,menos%20un%20enlace%20carbono%2Dmetal'},
    {number:11,direction:'across',row:12,column:7,clue:'El efecto inductivo está relacionado directamente con la',answer:'carga',hint:'https://es.wikipedia.org/wiki/Efecto_inductivo#:~:text=En%20qu%C3%ADmica%2C%20el%20efecto%20inductivo,medio%20polar%20(e.%20i.%20din%C3%A1mico)'},
    {number:12,direction:'down',row:12,column:9,clue:'La estabilidad de los carbenos a través del efecto electrónico push pull debido a los efectos mesoméricos e inductivos se da por la',answer:'retrodonacion',hint:'https://es.wikipedia.org/wiki/Retrodonaci%C3%B3n_%CF%80#:~:text=En%20qu%C3%ADmica%2C%20la%20retrodonaci%C3%B3n%20%CF%80,de%20otro%20%C3%A1tomo%20o%20ligando'},
    {number:13,direction:'across',row:13,column:15,clue:'La técnica de caracterización más sencilla y común para los carbonilos es la espectroscopía',answer:'infrarroja',hint:'https://chem.libretexts.org/Bookshelves/Inorganic_Chemistry/Map%3A_Inorganic_Chemistry_(Housecroft)/24%3A_Organometallic_chemistry%3A_d-block_elements/24.02%3A_Common_Types_of_Ligand_-_Bonding_and_Spectroscopy/24.2B%3A_Carbonyl_Ligands'},
    {number:14,direction:'down',row:16,column:16,clue:'Las dos características más importantes de los... ...es su capacidad de retrodonación y que debido a su estabilidad son excelentes grupos salientes.',answer:'carbonilos',hint:'https://byjus.com/chemistry/metal-carbonyls-organometallics/'},
    {number:15,direction:'across',row:17,column:9,clue:'La...  ...se evita en la síntesis de los carbenos, debido a que una vez que se forma no puede romperse por su estabilidad.',answer:'dimerizacion',hint:'https://es.wikipedia.org/wiki/Carbeno#:~:text=Los%20carbenos%20y%20los%20precursores,en%20la%20s%C3%ADntesis%20de%20polialquiniletenos'},
    {number:16,direction:'across',row:20,column:13,clue:'Los carbonilos debido a su excelente conductividad son ampliamente utilizados en...',answer:'fotoquimica',hint:'https://ri.conicet.gov.ar/handle/11336/24377'},
    {number:17,direction:'across',row:22,column:8,clue:'Los carbonilos donan densidad electrónica a través del orbital molecular',answer:'sigma',hint:'http://www.ilpi.com/organomet/carbonyl.html'},
    {number:18,direction:'down',row:23,column:19,clue:'Los carbenos lineales deben tener un estado de multiplicidad...',answer:'singlete',hint:'https://es.strephonsays.com/singlet-and-triplet-carbene-8238'},
    {number:19,direction:'across',row:24,column:15,clue:'El impedimento estérico de los ligandos con ángulo de cono que determinan el incremento de la acidez pi es una propiedad de las',answer:'fosfinas',hint:'https://chem.libretexts.org/Bookshelves/Inorganic_Chemistry/Book%3A_Introduction_to_Organometallic_Chemistry_(Ghosh_and_Balakrishna)/04%3A_Organoelement_Compounds_of_Group_15/4.03%3A_Phosphines'},
    {number:20,direction:'down',row:24,column:22,clue:'Los ligandos orgánicos cíclicos que contienen sistemas π deslocalizados, se coordinan a los átomos metálicos para formar compuestos tipo...',answer:'sandwich',hint:'https://www.daviddarling.info/encyclopedia/S/sandwich_compound.html'},
];

// Set global variables
var gridSize = [24,31];     // number of squares wide, number of squares tall
var direction = 'across';   // set initial direction to 'across'
var markCorrect = true;     // indicates ability for answers to be marked correct. will be set to false if "show answers" is clicked
var successShown = false;   // indicates whether the success modal has been shown
var $clueTooltip = $('<div class="clue-tooltip invisible"><div class="clue-tooltip-arrow"></div><div class="clue-tooltip-text"></div></div>').appendTo('.crossword');

// set up the base grid
var $crosswordPuzzle = $('<div class="crossword-puzzle col-md-8 col-lg-9"></div>');
var $table = $('<table class="crossword-grid"></table>');
for ( i=0; i<gridSize[1]; i++) {
    var $row = $('<tr class="grid-row"></tr>');
    for (j=0;j<gridSize[0];j++) {
        $square = $('<td class="grid-square"></td>');
        $square.appendTo($row);
    }
    $row.appendTo($table);
    $table.appendTo($crosswordPuzzle);
    $crosswordPuzzle.appendTo('.crossword');
}

// Add the fields to the grid
for (i=0;i<words.length;i++) {
    var row = words[i].row;
    var column = words[i].column;
    for (j=0;j<words[i].answer.length;j++) {
        var $square = $('.grid-row').eq(row-1).find('.grid-square').eq(column-1);
        var title = words[i].clue+', letter '+(j+1)+' of '+words[i].answer.length;
        var id = (words[i].direction == 'across' ? 'a' : 'd') + '-' + words[i].number + '-' + (j+1);
        if (j==0 && $square.find('.word-label').length == 0) {
            $('<span class="word-label">'+words[i].number+'</span>').appendTo($square);
        }
        if ($square.find('input').length == 0) {
            var $input = $('<input type="text" class="letter" title="'+title+'" id="'+id+'" maxlength="1" />');
                if (words[i].direction == 'across') {
                    $input.attr('data-across',words[i].number);
                    $input.attr('data-across-clue',words[i].clue);
                } else {
                    $input.attr('data-down',words[i].number);
                    $input.attr('data-down-clue',words[i].clue);
                }
                $input.data('letter',words[i].answer[j]);
                $input.appendTo($square);
            $square.addClass('active');
        } else {
            var $input = $square.find('input');
                $input.attr('title',$input.attr('title')+'; '+title);
                $input.attr('id',$input.attr('id')+'+'+id);
                if (words[i].direction == 'across') {
                    $input.attr('data-across',words[i].number);
                    $input.attr('data-across-clue',words[i].clue);
                } else {
                    $input.attr('data-down',words[i].number);
                    $input.attr('data-down-clue',words[i].clue);
                }
        }
        if (words[i].direction == 'down') {
            row++;
        } else {
            column++;
        }
    }
}

// Add the clues to the page
var $crosswordClues = $('<div class="crossword-clues col-md-4 col-lg-3"><div class="row"></div></div>');
var $acrossClues = $('<div class="across-clues col-sm-6 col-md-12"><p><strong>Horizontal</strong></p><ol></ol></div>');
var $downClues = $('<div class="down-clues col-sm-6 col-md-12"><p><strong>Vertical</strong></p><ol></ol></div>');
for (i=0;i<words.length;i++) {
    var $clue = $('<li value="'+words[i].number+'" data-direction="'+words[i].direction+'" data-clue="'+words[i].number+'"><label>'+words[i].clue+' </label></li>');
        $clue.find('label').attr('for',$('[data-'+words[i].direction+'='+words[i].number+']').eq(0).attr('id'));
        $clue.on('click',function(){
            direction = $(this).data('direction');
        })
    if ( words[i].hint.length > 0 && words[i].hint != '' ) {
        $('<a class="hint" href="'+words[i].hint+'" target="_blank" title="Sugerencia para '+words[i].number+' '+words[i].direction+'">(Sugerencia)</a>').appendTo($clue.find('label'));
    }
    if (words[i].direction == 'across') {
        $clue.appendTo($acrossClues.find('ol'));
    } else {
        $clue.appendTo($downClues.find('ol'));
    }
}
$acrossClues.appendTo($crosswordClues.find('.row'));
$downClues.appendTo($crosswordClues.find('.row'));
$crosswordClues.appendTo('.crossword');

// Add the hints, reset, and show answers buttons
var $puzzleButtons = $('<div class="crossword-buttons"></div>');
var $hintsButton = $('<button class="btn btn-default">Mostrar sugerencias</button>');
    $hintsButton.on('click',function(e){
        e.preventDefault();
        $('.crossword-clues').toggleClass('show-hints');
        $(this).text( $(this).text() == 'Mostrar sugerencias' ? 'Ocultar sugerencias' : 'Mostrar sugerencias' );
    });
    $hintsButton.appendTo($puzzleButtons);
var $resetButton = $('<button class="btn btn-default">Restablecer crucigrama</button>');
    $resetButton.on('click',function(e){
        e.preventDefault();
        $('input.letter').val('').parent('.grid-square').removeClass('correct-down correct-across');
        $('.crossword-clues li').removeClass('correct');
        markCorrect = true;
    });
    $resetButton.appendTo($puzzleButtons);
$puzzleButtons.appendTo('.crossword');

// Add the success modal
var $modal = $('<div class="modal fade" id="success-modal" tabindex="-1" role="dialog"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title">¡Felicitaciones!</h4></div><div class="modal-body"><p>Has terminado el crucigrama.</p></div></div></div></div>');
$modal.appendTo('body');

// When a square is focused, highlight the other squares in that word and the clue, and show the tooltip
$('input.letter').on('focus',function(){
    var $current = $(this);
    $current.select();
    $current[0].setSelectionRange(0, 10);
    getDirection($current);
    $('[data-'+direction+'='+$current.data(direction)+']').parent('.grid-square').addClass('current-word');
    $('.crossword-clues li').removeClass('active');
    $('.crossword-clues li[data-direction='+direction+'][data-clue='+$(this).data(direction)+']').addClass('active');
    $clueTooltip.css({'left':tooltipPosition($current).left+'px','top':tooltipPosition($current).top-10+'px'}).removeClass('invisible').find('.clue-tooltip-arrow').css('left',tooltipPosition($current).offset+'px');
})

// When a square is blurred, remove highlight from squares and clue
$('input.letter').on('blur',function(){
    $('.grid-square').removeClass('current-word');
    $('.crossword-clues li').removeClass('active');
    $clueTooltip.addClass('invisible');
})

// handle directional and letter keys in letter inputs
$('input.letter').on('keyup',function(e){
    var $current = $(this);
    if (e.which == 38) {      // up arrow moves to square above if it exists
        direction = 'down';
        if (getPrevLetter($current)) {
            getPrevLetter($current).focus();
        }
    } else if (e.which == 40) {      // down arrow moves to square below if it exists
        direction = 'down';
        if (getNextLetter($current)) {
            getNextLetter($current).focus();
        }
    } else if (e.which == 37) {      // left arrow moves to square to the left if it exists
        direction = 'across';
        if (getPrevLetter($current)) {
            getPrevLetter($current).focus();
        }
    } else if (e.which == 39) {      // right arrow moves to square to the right if it exists
        direction = 'across';
        if (getNextLetter($current)) {
            getNextLetter($current).focus();
        }
    } else {
        e.preventDefault();
    }
    if (markCorrect) {
        checkWord($current);
    };
})

// Tab and Shift/Tab move to next and previous words
$('input.letter').on('keydown',function(e){
    var $current = $(this);
    if (e.which == 9) {       // tab
        e.preventDefault();
        if (e.shiftKey) {       // shift/tab
            getPrevWord($current).focus();
        } else {
            getNextWord($current).focus();
        }
    } else if (e.which == 8) {        // backspace
        e.preventDefault();
        if ($(this).val().length > 0) {
            $(this).val('');
        } else {
            if (getPrevLetter($current)) {
                getPrevLetter($current).focus().val('');
            }
        }
    } else if ((e.which>=48 && e.which<=90) || (e.which>=96 && e.which<=111) || (e.which>=186 && e.which<=192) || (e.which>=219 && e.which<=222)) {    // typeable characters move to the next square in the word if it exists
        e.preventDefault();
        $current.val(String.fromCharCode(e.which));
        if (getNextLetter($current)) {
            getNextLetter($current).focus();
        }
    }
    if (markCorrect) {
        checkWord($current);
    };
})

// Check if all letters in selected word are correct
function checkWord($current) {
    var correct;
    var currentWord;
    if ( $current.is('[data-across]') ) {
        correct = 0;
        currentWord = $current.data('across');
        $('[data-across='+currentWord+']').each(function(){
            if ($(this).val().toLowerCase() == $(this).data('letter').toLowerCase()) {
                correct += 1;
            }
        })
        if (correct == $('[data-across='+currentWord+']').length ) {
            $('[data-across='+currentWord+']').parent('.grid-square').addClass('correct-across');
            $('.crossword-clues li[data-direction=across][data-clue='+currentWord+']').addClass('correct');
        } else {
            $('[data-across='+currentWord+']').parent('.grid-square').removeClass('correct-across');
            $('.crossword-clues li[data-direction=across][data-clue='+currentWord+']').removeClass('correct');
        }
    }
    if ( $current.is('[data-down]') ) {
        correct = 0;
        currentWord = $current.data('down');
        $('[data-down='+currentWord+']').each(function(){
            if ($(this).val().toLowerCase() == $(this).data('letter').toLowerCase()) {
                correct += 1;
            }
        })
        if (correct == $('[data-down='+currentWord+']').length ) {
            $('[data-down='+currentWord+']').parent('.grid-square').addClass('correct-down');
            $('.crossword-clues li[data-direction=down][data-clue='+currentWord+']').addClass('correct');
        } else {
            $('[data-down='+currentWord+']').parent('.grid-square').removeClass('correct-down');
            $('.crossword-clues li[data-direction=down][data-clue='+currentWord+']').removeClass('correct');
        }
    }
    if ($('.grid-square.active:not([class*=correct])').length == 0 && !successShown) {
        $('#success-modal').modal();
        successShown = true;
    }
}

// Return the input of the first letter of the next word in the clues list
function getNextWord($current) {
    var length = $('.crossword-clues li').length;
    var index = $('.crossword-clues li').index($('.crossword-clues li.active'));
    var nextWord;
    if (index < length-1) {
        $nextWord = $('.crossword-clues li').eq(index+1);
    } else {
        $nextWord = $('.crossword-clues li').eq(0);
    }
    direction = $nextWord.data('direction');
    return $('[data-'+$nextWord.data('direction')+'='+$nextWord.data('clue')+']').eq(0);
}

// Return the input of the first letter of the previous word in the clues list
function getPrevWord($current) {
    var length = $('.crossword-clues li').length;
    var index = $('.crossword-clues li').index($('.crossword-clues li.active'));
    var prevWord;
    if (index > 0) {
        $prevWord = $('.crossword-clues li').eq(index-1);
    } else {
        $prevWord = $('.crossword-clues li').eq(length-1);
    }
    direction = $prevWord.data('direction');
    return $('[data-'+$prevWord.data('direction')+'='+$prevWord.data('clue')+']').eq(0);
}

// If there is a letter square before or after the current letter in the current direction, keep global direction the same, otherwise switch global direction
function getDirection($current) {
    if (getPrevLetter($current) || getNextLetter($current)) {
        direction = direction;
    } else {
        direction = (direction == 'across') ? 'down' : 'across';
    }
}

// Return the input of the previous letter in the current word if it exists, otherwise return false
function getPrevLetter($current) {
    var index = $('[data-'+direction+'='+$current.data(direction)+']').index($current);
    if (index > 0) {
       return $('[data-'+direction+'='+$current.data(direction)+']').eq(index-1);
    } else {
       return false;
    }
}

// Return the input of the next letter in the current word if it exists, otherwise return false
function getNextLetter($current) {
    var length = $('[data-'+direction+'='+$current.data(direction)+']').length;
    var index = $('[data-'+direction+'='+$current.data(direction)+']').index($current);
    if (index < length-1) {
       return $('[data-'+direction+'='+$current.data(direction)+']').eq(index+1);
    } else {
       return false;
    }
}

// Return the top, left, and offset positions for tooltip placement
function tooltipPosition($current) {
    var left = $('[data-'+direction+'='+$current.data(direction)+']').eq(0).offset().left - $('.crossword').offset().left;
    var top = $('[data-'+direction+'='+$current.data(direction)+']').eq(0).offset().top - $('.crossword').offset().top;
    $clueTooltip.find('.clue-tooltip-text').text($current.data(direction+'-clue'));
    var right = left + $clueTooltip.outerWidth();
    var offset = right - $('.crossword-puzzle').outerWidth();
        offset = offset > 0 ? offset : 0;
    left = left - offset;
    return {'left':left,'top':top,'offset':offset};
}