/*const cardList = [{
    title: 'Lake Tyrell',
    path: 'Images/laketyrell.jpeg',
    subTitle: 'About Lake Tyrell',
    description: 'Lake Tyrrell  lies 195 miles (314 km) northwest of Melbourne. It is the largest inland saltwater lake in Victoria and the most inland breeding ground for seagulls.'
},
{
    title: 'Matlida',
    path: 'Images/matilda.jpg',
    subTitle: 'About Matlida',
    description: 'Matilda is the flame-grilled passion project of Melbourne chef Scott Pickett (Estelle, Lupo). The emphasis here is hot coals and open flames. Matilda is a more casual approach than the fine-dining lean of some of Scott.'
},
{
    title: 'Artcenter',
    path: 'Images/artscentrepb.jpg',
    subTitle: 'About Artcenter',
    description: 'Arts Centre Melbourne, originally known as the Victorian Arts Centre and briefly called the Arts Centre, is a performing arts centre consisting of a complex of theatres and concert halls in the Melbourne Arts Precinct, located in the central Melbourne suburb of Southbank in Victoria, Australia.'
}];
*/

const addCards = (items) => {
    items.forEach(item => {
        let itemToAppend = '<div class="col s4 center-align">'+
                '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="'+item.path+'">'+
                '</div><div class="card-content">'+
                '<span class="card-title activator grey-text text-darken-4">'+item.title+'<i class="material-icons right">more_vert</i></span><p><a href="#">'+item.subTitle+'</a></p></div>'+
                '<div class="card-reveal">'+
                '<span class="card-title grey-text text-darken-4">'+item.title+'<i class="material-icons right">close</i></span>'+
                '<p class="card-text">'+item.description+'</p>'+
                '</div></div></div>';
        $("#card-section").append(itemToAppend)
    });
}

const formSumitted = () => {
    let formData = {};
    formData.title = $('#title').val();
    formData.subTitle = $('#subTitle').val();
    formData.path = $('#path').val();
    formData.description = $('#description').val();

    console.log(formData);
    postCat(formData);
}

function postCat(cat){
    $.ajax({
        url:'/api/cat',
        type:'POST',
        data:cat,
        success: (result)=>{
            if (result.statusCode === 201) {
                alert('cat added');
            }
        }
    });
}

function getAllCats(){
    $.get('/api/cat', (result) => {
        if (result.statusCode === 200) {
            addCards(result.data);
        }
    });
}

$(document).ready(function(){
    $('.materialboxed').materialbox();
    $('#formSubmit').click(()=>{
        formSumitted();
    });
    $('.modal').modal();
    getAllCats();
});