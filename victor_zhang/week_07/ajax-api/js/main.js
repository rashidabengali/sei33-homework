const company_name = $('#company_name').val();

const url = 'https://www.themuse.com/api/public/companies?location=Sydney%2C%20Australia&page=0';

$('#industry_name').append(`<option>Select Industry</option>`);

const industryList = [];

let companies = {};

$.ajax(url).done(function (data) {
    if (data.page_count === 0) { return };
    console.log(data);
    companies = data.results;
    console.log(companies)
    companies.forEach( function (company) {
        $('#companies ul').append(`<li><img src=${ company.refs.logo_image }>${ company.name }</li>`);
        console.log(company.refs.logo_image);
        console.log(company.name);
        company.industries.forEach (function (industry) {
            console.log(industry.name);
            if ($.inArray(industry.name, industryList) !== -1) { return };
            industryList.push(industry.name);
            $('#industry_name').append(`<option>${ industry.name }</option>`);
        })
    })
}).done(console.log);


$('#search').on('submit', function (event) {
    event.preventDefault();

    const industry_name = $('#industry_name').val().toLowerCase();


    $('#companies ul').empty();

    if (industry_name === "select industry") {
        companies.forEach( function (company) {
            $('#companies ul').append(`<li><img src=${ company.refs.logo_image }>${ company.name }</li>`);
        });
    }
    else {
        companies.forEach( function (company) {
            company.industries.forEach (function (industry) {
                if (industry.name.toLowerCase() === industry_name) {
                    $('#companies ul').append(`<li><img src=${ company.refs.logo_image }>${ company.name }</li>`);
                };
            });
        });
    };

});