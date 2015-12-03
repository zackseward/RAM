$(document).ready(function() {
  var stories = [
    {
      hed: "Rizzo calls TV reporter crumb, creep, coward, lush",
      date: "Nov. 20, 1980",
      by: "Associated Press",
      dek: "Why, the television reporter asked the former mayor, wouldn’t he answer his questions?",
      url: "https://news.google.com/newspapers?id=n6dRAAAAIBAJ&sjid=yG0DAAAAIBAJ&pg=5386%2C3420419"
    },
    {
      hed: "I'm From Philly. 30 Years Later, I'm Still Trying To Make Sense Of The MOVE Bombing",
      date: "May 13, 2015",
      by: "NPR, Gene Demby",
      dek: "Talk to some of the folks who lived through the bombing of 62nd and Osage Avenue in West Philadelphia 30 years ago, and you'll notice that they refer to the event by its full date. May 13, 1985.",
      url: "http://www.npr.org/sections/codeswitch/2015/05/13/406243272/im-from-philly-30-years-later-im-still-trying-to-make-sense-of-the-move-bombing"
    },
    {
      hed: "Brand.com has mysteriously disappeared",
      date: "March 11, 2015",
      by: "Technical.ly Philly, Juliana Reyes",
      dek: "The domain is for sale. The emails are dead. The top execs are gone. The office is dark. What happened to online reputation management firm Brand.com?",
      url: "http://technical.ly/philly/2015/03/11/what-happened-brand-com/"
    },
    {
      hed: "At This Business Of Pleasure, Fear Is A Constant Companion",
      date: "Oct. 16, 1993",
      by: "Philadelphia Inquirer, Suzette Parmley",
      dek: "Behind the light blue doors of the Gentleman's Retreat is a world of fast money, aliases and clandestine meetings that take place in rooms with mirrored walls. Within this exclusive Center City massage parlor, pleasure has a price tag.",
      url: "http://articles.philly.com/1993-10-16/news/25938890_1_massage-parlor-security-guard-young-women"
    },
    {
      hed: "Meet the 'Refrigerator Ladies' Who Programmed the ENIAC",
      date: "Oct. 13, 2013",
      by: "Mental Floss, Alyson Sheppard",
      dek: "In 1945, Betty 'Jean' Jennings wanted out of Missouri. A math student at Northwest Missouri State Teachers College (now Northwest Missouri State University), the last thing the farm-bred 20-year-old wanted to do was stay inside a classroom and teach. She wanted adventure.",
      url: "http://mentalfloss.com/article/53160/meet-refrigerator-ladies-who-programmed-eniac"
    },
    {
      hed: "Jeremy Nowak's Vision for a New Philadelphia",
      date: "Feb. 1, 2013",
      by: "Philadelphia Magazine, Jason Fagone",
      dek: "Armed with a $2 billion endowment, visionary William Penn Foundation president Jeremy Nowak wanted to bring to life a new Philadelphia. Old Philadelphia, it seems, has other ideas.",
      url: "http://www.phillymag.com/articles/jeremy-nowaks-vision-philadelphia/?all=1"
    },
    {
      hed: "Fat, Drunk and Endearing: A Look Back at the '93 Phillies Season",
      date: "March 27, 2012",
      by: "Philadelphia Magazine, Mike Bertha",
      dek: "Even though Joe Carter dashed their hopes of a World Series victory some 20 years ago, Philly still loves the 1993 Phillies — and there’s a reason for that.",
      url: "http://www.phillymag.com/articles/fat-drunk-and-endearing-a-look-at-the-93-phillies-season/?all=1"
    },
    {
      hed: "Dialects Changing, But Not Disappearing In Philadelphia",
      date: "April 5, 2013",
      by: "NPR, Zack Seward",
      dek: "Researchers at the University of Pennsylvania are tracking changes in the Philadelphia accent.",
      url: "http://www.npr.org/2013/04/05/176368267/dialects-changing-but-not-disappearing-in-philadelphia"
    },
    {
      hed: "Jerry Blavat Hears It From Hy Lit",
      date: "July 4, 1995",
      by: "Philadelphia Inquirer, Jonathan Storm",
      dek: "New Jersey authorities said last week that Jerry Blavat once asked his mobster pal Scarfo to rub out DJ competitor Hy Lit. Yesterday Blavat sat face-to-face with Lit on Channel 6's AM/Philadelphia.",
      url: "http://articles.philly.com/1995-07-04/news/25677382_1_mob-boss-crazy-phil-geator"
    },
    {
      hed: "Mob Sway Over Bars Called Strong",
      date: "Feb. 19, 1992",
      by: "New York Times, Joseph Sullivan",
      dek: "Organized crime's historical influence in the liquor business is still strong in New Jersey, state officials said today, and they blamed local liquor authorities for the problem.",
      url: "http://www.nytimes.com/1992/02/19/nyregion/mob-sway-over-bars-called-strong.html"
    },
    {
      hed: "Philadelphia Riverfront Plan in Low Gear",
      date: "Aug. 2, 1992",
      by: "New York Times, David Wallace",
      dek: "This city's plan for a single cohesive riverfront development has been ambushed by a recession, slack demand for new housing and the travails of a real estate market in decline.",
      url: "http://www.nytimes.com/1992/08/02/realestate/focus-philadelphia-riverfront-plan-in-low-gear.html"
    },
    {
      hed: "A Creative Renaissance in Philadelphia's Fishtown",
      date: "Oct. 9, 2013",
      by: "New York Times, Bonnie Tsui",
      dek: "The scruffy neighborhood of Fishtown in Philadelphia is having a creative renaissance, coming on the heels of Stephen Starr and Joe Carroll’s recent opening of the barbecue restaurant Fette Sau.",
      url: "http://www.nytimes.com/2013/10/13/travel/a-creative-renaissance-in-philadelphias-fishtown.html?_r=0"
    },
    {
      hed: "Top 10 Drug Corners",
      date: "May 2, 2007",
      by: "Philadelphia Weekly, Steve Volk",
      dek: "The narcotics trade has taken over much of Philly. Unfortunately, the 10 spots here represent only a fraction of the action.",
      url: "http://www.philadelphiaweekly.com/news-and-opinion/cover-story/top_10_drug_corners-38426414.html"
    },
    {
      hed: "Winds Destroy Blimp At Philadelphia Airport",
      date: "Aug. 20, 2000",
      by: "Philadelphia Inquirer, Shankar Vedantam",
      dek: "A strong gust of wind slammed into a Goodyear blimp yesterday at Northeast Philadelphia Airport, forcing it into a mooring mast and destroying the airship. The seven people aboard were unhurt.",
      url: "http://articles.philly.com/2000-08-20/news/25596012_1_goodyear-blimp-mooring-mast-ground-crew"
    },
    {
      hed: "The often proud and sometimes weird history of Philly neighborhood names",
      date: "June 18, 2014",
      by: "WHYY, Elizabeth Fiedler",
      dek: "What's in a name? For some Philadelphia neighborhoods, the answer is rich history. For other places, like West Philly's Overbrook, the answer is one of simple geography.",
      url: "http://www.newsworks.org/index.php/local/philadelphia/69357-the-often-proud-and-sometimes-weird-history-of-philadelphia-neighborhood-names-"
    },
    {
      hed: "Around Old Shibe Park, Ethnic Pockets Were United Into A Neighborhood By The Presence Of Baseball",
      date: "Nov. 12, 1997",
      by: "Philadelphia Inquirer, B.J. Kelley",
      dek: "Even after the grand old ballpark was abandoned in 1970, even when it was destroyed by fire in 1971 and its charred shell became a breeding ground for crime and drugs, and even when it was razed in 1976 and would never again wear the noble and ancient dust of ball games, still the fans returned to the site each year to restoke their warm memories of Connie Mack Stadium, nee Shibe Park.",
      url: "http://articles.philly.com/1997-11-12/news/25545472_1_ballpark-connie-mack-stadium-shibe-park"
    },
    {
      hed: "Eagles End Suspense: They Will Remain in Philadelphia",
      date: "Dec. 16, 1984",
      by: "Washington Post, Mark Asher",
      dek: "Leonard Tose, the debt-ridden owner of the Philadelphia Eagles, relented to building pressures last night and announced that his team will not move to Phoenix.",
      url: "https://www.washingtonpost.com/archive/sports/1984/12/16/eagles-end-suspense-they-will-remain-in-philadelphia/7ed4bb8d-05d6-4c7b-9b25-e9f1ae6da42d/"
    },
    {
      hed: "A Trial Revisits Philadelphia's 11-Year-Old Heartbreak",
      date: "April 2, 1996",
      by: "New York Times, Don Terry",
      dek: "The flames of Osage Avenue still rage in Ramona Africa's soul. And its ghosts still haunt and hurt her heart, nearly 11 years after 11 members of her 'family,' including five children, were killed when the police dropped a bomb on the headquarters of the radical group MOVE.",
      url: "http://www.nytimes.com/1996/04/02/us/a-trial-revisits-philadelphia-s-11-year-old-heartbreak.html?pagewanted=all"
    },
    {
      hed: "Friendly Canadian Hitchhiking Robot Decapitated While Visiting Philadelphia",
      date: "Aug. 3, 2015",
      by: "Slate, Lily Hay Newman",
      dek: "HitchBot is a robot built for studying human interactions. It hitchhikes through different countries examining the goodwill of humans, and so far it has had successful trips around Canada, the Netherlands, and Germany. But it took only two weeks of traveling in the United States for something to go wrong.",
      url: "http://www.slate.com/blogs/future_tense/2015/08/03/hitchbot_went_on_a_hitchhiking_tour_but_was_destroyed_while_going_from_nyc.html"
    },
    {
      hed: "It's Not Chicago, Philadelphia Democrats Say of Their Primary",
      date: "May 6, 1983",
      by: "New York Times, Howell Raines",
      dek: "'Philadelphia is not Chicago' has become the catch phrase of the Democratic mayoral primary here. By repeating it, the rival factions suggest a shared intention to avoid the racial animosities of the election for Mayor in Chicago last month.",
      url: "http://www.nytimes.com/1983/05/06/us/it-s-not-chicago-philadelphia-democrats-say-of-their-primary.html"
    },
    {
      hed: "Philadelphia vs. the Phillies",
      date: "Oct. 22, 2008",
      by: "Slate, Chris Wilson",
      dek: "Philly fans finally have a winning baseball team. Now they just need to stop hating themselves.",
      url: "http://www.slate.com/articles/sports/sports_nut/2008/10/philadelphia_vs_the_phillies.html"
    },
  ];

  $("#hitme").click(function () {
    var story = stories[Math.floor(Math.random() * stories.length)];
    $("#story").html('<p><p><strong>' + story.hed + '</strong></p><p><em>' + story.date + '</em> | <em>' + story.by + '</em></p><p>' + story.dek + '</p><p><a href="'+story.url + '" target="_blank">Read full story</a></p>');
    // $('<p>Check out this story.</p>').text("#story");
  });

});






// PICKING ARTICLE RANDOMLY
// bind a click handler to the button
// generate a random number between 0 and 20 (minus 1)
// use that number to grab an article out of that array
//
//
// Store the story in a variable called story;
// Make a string that looks like this:
// <p>Check out "It's Not Chicago, Philadelphia Democrats Say of Their Primary" published on May 6, 1983</p>;
// var markup = '<p>Check out "' + story.hed + '" published on ' + story.date + '</p>';
//
// Use jQuery to append markup into the DOM
// You can put <br> and buttons in that string
