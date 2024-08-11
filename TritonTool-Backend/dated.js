



/*


async function searchProfessor(name) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`https://www.ratemyprofessors.com/search/professors/1079?q=${encodeURIComponent(name)}`);
  
  // Wait for the results to load
  await page.waitForSelector('.TeacherCard__StyledTeacherCard-syjs0d-0');
  
  // Extract the data you need
  const result = await page.evaluate(() => {
    const cards = document.querySelectorAll('.TeacherCard__StyledTeacherCard-syjs0d-0');
    if (cards.length > 0) {
      const firstCard = cards[0];
      return {
        name: firstCard.querySelector('.CardName__StyledCardName-sc-1gyrgim-0').textContent,
        school: firstCard.querySelector('.CardSchool__StyledCardSchool-sc-19lmz2k-0').textContent,
        department: firstCard.querySelector('.CardSchool__Department-sc-19lmz2k-1').textContent,
        rating: firstCard.querySelector('.CardNumRating__CardNumRatingNumber-sc-17t4b9u-2').textContent,
      };
    }
    return null;
  });

  await browser.close();
  return result;
}












getfaculty
let faculty = [];
    const url = 'https://cse.ucsd.edu/people/faculty-profiles/faculty';
    try {
        const response =  await axios.get(url)
        const $ = cheerio.load(response.data)
    
        const elements = $('.field-content');
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            let person = {};
            const site_link = 'https://cse.ucsd.edu' + $(element).find('a').first().attr('href');
            const img_link = 'https://cse.ucsd.edu' + $(element).find('img').attr('src');
            const name = $(element).find('strong').text().trim();
            
            // try {
            //     const prof_link = await getRMP(name);
            //     person['prof_link'] = prof_link;
            // } catch (error) {
            //     console.error(`Error getting RMP link for ${name}:`, error);
            // }

            person['site_link'] = site_link;
            person['img_link'] = img_link;
            person['name'] = name;
            if (name) faculty.push(person);
        }
        console.log(faculty)
        return faculty
    } catch (error) {
        console.error(error);
        throw new Error('error');
    }
*/