// STORY SUBMISSION SHOUTOUTS!!!
//
// @nathanield & @cs_palmer (Feb. 3, 2016)
// @ajzaleski (Feb. 11, 2016)
// @lizyoungphl (April 6, 2016)
//
//  ___  _ _  ___  _  _  _  _
// |_ _|| | |/ _ \| \| || |/ /
//  | | |   ||   ||  ` ||   <
//  |_| |_|_||_|_||_|\_||_|\_\
//      _ _  ___  _ _   _
//     | | |/   \| | | / \
//     \   /| | || | | \_/
//      |_| \___/\___/ (_)
//

$(document).ready(function() {
  var stories = [
    {
      hed: "Rizzo calls TV reporter crumb, creep, coward, lush",
      date: "Nov. 20, 1980",
      by: "Associated Press",
      dek: "Why, the television reporter asked the former mayor, wouldn't he answer his questions?",
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
      dek: "Even though Joe Carter dashed their hopes of a World Series victory some 20 years ago, Philly still loves the 1993 Phillies — and there's a reason for that.",
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
      dek: "The scruffy neighborhood of Fishtown in Philadelphia is having a creative renaissance, coming on the heels of Stephen Starr and Joe Carroll's recent opening of the barbecue restaurant Fette Sau.",
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
    // {
    //   hed: "Around Old Shibe Park, Ethnic Pockets Were United Into A Neighborhood By The Presence Of Baseball",
    //   date: "Nov. 12, 1997",
    //   by: "Philadelphia Inquirer, B.J. Kelley",
    //   dek: "Even after the grand old ballpark was abandoned in 1970, even when it was destroyed by fire in 1971 and its charred shell became a breeding ground for crime and drugs, and even when it was razed in 1976 and would never again wear the noble and ancient dust of ball games, still the fans returned to the site each year to restoke their warm memories of Connie Mack Stadium, nee Shibe Park.",
    //   url: "http://articles.philly.com/1997-11-12/news/25545472_1_ballpark-connie-mack-stadium-shibe-park"
    // },
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
      dek: "HitchBot is a robot built for studying human interactions.",
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
    {
      hed: "North Philly bookstore ships to prisons — and delivers with a personal touch",
      date: "Oct. 26, 2015",
      by: "PhillyVoice, Jake Blumgart",
      dek: "Pass through the intersection of Broad and Erie in North Philadelphia and it's impossible to miss the city's last black-owned bookstore.",
      url: "http://www.phillyvoice.com/jake-black-and-noble-bookstore/"
    },
    {
      hed: "The Missing Namesake Of North Philly's Lost Necropolis",
      date: "Oct. 21, 2014",
      by: "Hidden City Philadelphia, Harry Kyriakodis",
      dek: "The last memorial stones of Monument Cemetery, about two dozen grave markers, reveal themselves at low tide on the western bank of the Delaware River under the Betsy Ross Bridge, a strange and unnerving sight.",
      url: "http://hiddencityphila.org/2014/10/the-missing-monument-cemetery/"
    },
    {
      hed: "Burglars Who Took On F.B.I. Abandon Shadows",
      date: "Jan. 7, 2014",
      by: "New York Times, Mark Mazzetti",
      dek: "The perfect crime is far easier to pull off when nobody is watching.",
      url: "http://www.nytimes.com/2014/01/07/us/burglars-who-took-on-fbi-abandon-shadows.html?pagewanted=all"
    },
    {
      hed: "Cops: Black and Blue",
      date: "March 3, 2009",
      by: "Temple University's Multimedia Urban Reporting Lab, Shannon McDonald",
      dek: "Bill Thrasher is an officer in North Philadelphia's 22nd Police District. His blonde hair is youthful, unaltered by sun or life. His eyes are identical to the sky blue of the uniform shirt he wears beneath his jacket and bulletproof vest.",
      url: "https://philadelphianeighborhoods.com/2009/03/01/cops-on-the-beat/"
    },
    {
      hed: "Unsafe at Any Speed",
      date: "Aug. 1, 2007",
      by: "Philadelphia Weekly, Kia Gregory",
      dek: "Another Lincoln Drive home receives an unwelcome vehicular visitor.",
      url: "http://www.philadelphiaweekly.com/news-and-opinion/unsafe_at_any_speed-38459154.html"
    },
    {
      hed: "Remains of the Day",
      date: "April 2, 2003",
      by: "Philadelphia Weekly, Brian Hickey",
      dek: "It's been more than a month since Pete Kent's eviscerated body was found inside an abandoned North Philly row home. Police still don't know how he died, or why someone would take his vital organs. Neither do the people who love him.",
      url: "http://www.philadelphiaweekly.com/news-and-opinion/cover-story/remains_of_the_day-38365939.html"
    },
    {
      hed: "Gang Mentality",
      date: "Dec. 16, 2004",
      by: "Philadelphia City Paper, Doron Taussig",
      dek: "It's almost time for dismissal at Martin Luther King High School. There's a rumor going around that somebody's going to get shot.",
      url: "http://citypaper.net/articles/2004-12-16/cover.shtml"
    },
    {
      hed: "Four Are Charged in Beating of Black Family",
      date: "Sept. 27, 1994",
      by: "Philadelphia Inquirer, Myrna Ludwig",
      dek: "Four white people have been charged with breaking into the home of a deaf black woman and beating her and her teen-age son with aluminum bats in what the police here say was a racially motivated attack.",
      url: "http://www.nytimes.com/1994/09/27/us/four-are-charged-in-beating-of-black-family.html"
    },
    {
      hed: "A Born-Again Franklin Institute Banishes Stodginess",
      date: "June 10, 1990",
      by: "New York Times, Paul Goldberger",
      dek: "The Transition is one of the most startling in Philadelphia: to go from the domed neo-classical hall of the original Franklin Institute to the vibrant atrium of the museum's just-opened Futures Center is not only to move from old to new but also from static to dynamic, from formal to relaxed, and from sumptuous to sleek.",
      url: "http://www.nytimes.com/1990/06/10/arts/architecture-view-a-born-again-franklin-institute-banishes-stodginess.html"
    },
    {
      hed: "He Works Magic At City Hall",
      date: "April 27, 1992",
      by: "Philadelphia Inquirer, Marc Duvoisin",
      dek: "David L. Cohen, the mayor's chief of staff, is heading down a fourth-floor corridor in City Hall, returning to his office after a brief, hushed water-cooler confab with City Council President John F. Street, when someone calls his name.",
      url: "http://articles.philly.com/1992-04-27/news/26005874_1_ed-rendell-political-hardball-city-hall"
    },
    {
      hed: "The Trial Boils Down To Race",
      date: "Feb. 4, 1995",
      by: "Philadelphia Inquirer, Carol Morello",
      dek: "The aging lion of Philadelphia defense attorneys watched the famous police chase up the San Diego Freeway last June with a cool, calculating eye honed by decades in the courtroom.",
      url: "http://articles.philly.com/1995-02-04/news/25704169_1_charles-peruto-simpson-trial-black-jurors"
    },
    {
      hed: "Mob's Depleted Roster: Softball Team Plays On Minus Key Members",
      date: "April 21, 2000",
      by: "Philadelphia Daily News, Kitty Caparella",
      dek: "Mob softball is back under new management. At last night's opening game, team manager Anthony Borgesi pointed grandly to his new lineup on the softball field at Capitolo Playground, 10th and Wharton streets, in South Philadelphia.",
      url: "http://articles.philly.com/2000-04-21/news/25590151_1_mob-boss-joseph-skinny-joey-merlino-softball"
    },
    {
      hed: "How the bomb decision was made",
      date: "May 17, 1985",
      by: "Philadelphia Inquirer, Ron Wolf, William K. Marimow, Steve Lopez and John Woestendiek",
      dek: "Although the bombing of a radical strongpoint by Philadelphia police caught the citizenry by surprise, contingency plans for it had been made weeks, even months, before. Here is a reconstruction of the events and decisions that led to that action.",
      url: "http://mobile.philly.com/beta?wss=/philly/news&id=91713379"
    },
    {
      hed: "The Wreck of Amtrak 188",
      date: "Jan. 26, 2016",
      by: "New York Times, Matthew Shaer",
      dek: "What caused the worst American rail disaster in decades?",
      url: "http://www.nytimes.com/2016/01/31/magazine/the-wreck-of-amtrak-188.html?_r=0"

    {
      hed: "A small group of amateur rocket scientists keep their fizzling hobby alive",
      date: "Sept. 18, 2014",
      by: "Philadelphia City Paper, Andrew Zaleski",
      dek: "First you see the signs, yellow with bold, black lettering: 'Caution. Rocket launch in progress.'",
      url: "http://citypaper.net/Cover/A-small-group-of-amateur-rocket-scientists-keep-their-fizzling-hobby-alive/"
    },
    {
      hed: "The Dead Girl in Chuck Peruto's Bathtub",
      date: "Aug. 27, 2013",
      by: "Philadelphia Magazine, Lisa DePaulo",
      dek: "Julia Law was a pretty paralegal dating the city's most famous defense attorney. But the story of how she ended up dead in his house in May is one of secrets and lies.",
      url: "http://www.phillymag.com/articles/dead-girl-chuck-peruto-julia-law-bathtub/"
    },
    {
      hed: "The Battle for the Soul of Washington Avenue",
      date: "Aug. 16, 2015",
      by: "Philadelphia Magazine, Holly Otterbein",
      dek: "The chaotic but iconic South Philadelphia boulevard is on the cusp of enormous change. Can it evolve and stay weirdly wonderful?",
      url: "http://www.phillymag.com/citified/2015/08/16/washington-avenue/"
    }
  ];

  $("#hitme").click(function () {
    var story = stories[Math.floor(Math.random() * stories.length)];
    $("#story").html('<p><p><strong>' + story.hed + '</strong></p><p><em>' + story.date + '</em> | <em>' + story.by + '</em></p><p>' + story.dek + '</p><p><a href="'+story.url + '" target="_blank">Read full story</a></p>');
    // $('<p>Check out this story.</p>').text("#story");
  });

  $("#hitme").click(function(event) {
  event.preventDefault();
  });

});
