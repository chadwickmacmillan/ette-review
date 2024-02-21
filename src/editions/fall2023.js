const facebookShareUrl = "https://www.facebook.com/sharer/sharer.php?u="
const twitterShareUrl = "https://twitter.com/intent/tweet?url="
const instagramShareUrl = "https://www.instagram.com/?url="
const url = "https://ettereview.com" + import.meta.env.BASE_URL;

export const fall2023 = [
	{
		name: "Andrew Bertaina",
		slug: "bertaina",
		imageSrc: import.meta.env.BASE_URL + "images/fall2023/whales.webp",
		instagram: function() { return instagramShareUrl + url + "archive/fall2023/" + this.slug + "/"} 
		facebook: function() { return facebookShareUrl + url + "archive/fall2023/" this.slug + "/"} 
		twitter: function() { return twitterShareUrl + url + "archive/fall2023/" + this.slug + "/"} 
	},
	{
		name: "Patricia Q. Bidar",
		slug: "bidar",
		imageSrc: import.meta.env.BASE_URL + "images/fall2023/doors.webp",
		instagram: function() { return instagramShareUrl + url + "archive/fall2023/" + this.slug + "/"} 
		facebook: function() { return facebookShareUrl + url + "archive/fall2023/" this.slug + "/"} 
		twitter: function() { return twitterShareUrl + url + "archive/fall2023/" + this.slug + "/"} 
	},
	{
		name: "Avitus B. Carle",
		slug: "carle",
		imageSrc: import.meta.env.BASE_URL + "images/fall2023/airplane.webp",
		instagram: function() { return instagramShareUrl + url + "archive/fall2023/" + this.slug + "/"} 
		facebook: function() { return facebookShareUrl + url + "archive/fall2023/" this.slug + "/"} 
		twitter: function() { return twitterShareUrl + url + "archive/fall2023/" + this.slug + "/"} 
	},
	{
		name: "Kathy Fish",
		slug: "fish",
		imageSrc: import.meta.env.BASE_URL + "images/fall2023/cone.webp",
		instagram: function() { return instagramShareUrl + url + "archive/fall2023/" + this.slug + "/"} 
		facebook: function() { return facebookShareUrl + url + "archive/fall2023/" this.slug + "/"} 
		twitter: function() { return twitterShareUrl + url + "archive/fall2023/" + this.slug + "/"} 
	},
	{
		name: "Eliot Li",
		slug: "li",
		imageSrc: import.meta.env.BASE_URL + "images/fall2023/apron.webp",
		instagram: function() { return instagramShareUrl + url + "archive/fall2023/" + this.slug + "/"} 
		facebook: function() { return facebookShareUrl + url + "archive/fall2023/" this.slug + "/"} 
		twitter: function() { return twitterShareUrl + url + "archive/fall2023/" + this.slug + "/"} 
	},
	{
		name: "Jennifer Martelli",
		slug: "martelli",
		imageSrc: import.meta.env.BASE_URL + "images/fall2023/jung.webp",
		instagram: function() { return instagramShareUrl + url + "archive/fall2023/" + this.slug + "/"} 
		facebook: function() { return facebookShareUrl + url + "archive/fall2023/" this.slug + "/"} 
		twitter: function() { return twitterShareUrl + url + "archive/fall2023/" + this.slug + "/"} 
	},
	{
		name: "Douglas A. Martin",
		slug: "martin",
		imageSrc: import.meta.env.BASE_URL + "images/fall2023/fawn.webp",
		instagram: function() { return instagramShareUrl + url + "archive/fall2023/" + this.slug + "/"} 
		facebook: function() { return facebookShareUrl + url + "archive/fall2023/" this.slug + "/"} 
		twitter: function() { return twitterShareUrl + url + "archive/fall2023/" + this.slug + "/"} 
	},
	{
		name: "Cheryl Pappas",
		slug: "pappas",
		imageSrc: import.meta.env.BASE_URL + "images/fall2023/reddress.webp",
		instagram: function() { return instagramShareUrl + url + "archive/fall2023/" + this.slug + "/"} 
		facebook: function() { return facebookShareUrl + url + "archive/fall2023/" this.slug + "/"} 
		twitter: function() { return twitterShareUrl + url + "archive/fall2023/" + this.slug + "/"} 
	},
	{
		name: "M.A. Scott",
		slug: "scott",
		imageSrc: import.meta.env.BASE_URL + "images/fall2023/petticoat.webp",
		instagram: function() { return instagramShareUrl + url + "archive/fall2023/" + this.slug + "/"} 
		facebook: function() { return facebookShareUrl + url + "archive/fall2023/" this.slug + "/"} 
		twitter: function() { return twitterShareUrl + url + "archive/fall2023/" + this.slug + "/"} 
	},
	{
		name: "Eileen Tomarchio",
		slug: "tomarchio",
		imageSrc: import.meta.env.BASE_URL + "images/fall2023/octopus.webp",
		instagram: function() { return instagramShareUrl + url + "archive/fall2023/" + this.slug + "/"} 
		facebook: function() { return facebookShareUrl + url + "archive/fall2023/" this.slug + "/"} 
		twitter: function() { return twitterShareUrl + url + "archive/fall2023/" + this.slug + "/"} 
	},
	{
		name: false,
		slug: false,
		imageSrc: import.meta.env.BASE_URL + "images/fall2023/lambette.webp",
		instagram: function() { return instagramShareUrl + url + "archive/fall2023/" + this.slug + "/"} 
		facebook: function() { return facebookShareUrl + url + "archive/fall2023/" this.slug + "/"} 
		twitter: function() { return twitterShareUrl + url + "archive/fall2023/" + this.slug + "/"} 
	},
	{
		name: "pod-ette",
		slug: "podette",
		link: "podette",
		imageSrc: import.meta.env.BASE_URL + "images/fall2023/podette.webp",
	},
];
