// FEWD Project 2
//January 2015  Cohort 2
//Jevon Grimes

	var bio = { 
     "name": "Jevon Grimes", 
     "role": "Front End Web Developer", 
     "contacts": { 
 			"mobile": "9183463140", 
 			"email": "phishtraveler@gmail.com", 
 			"github": "phishtraveler", 
 			"linkedin": "Jevon Grimes", 
 			"location" : "Tulsa, OK, 74137"}, 
      "welcomeMessage": "Hello, welcome to my online resume!", 
      "skills": [ "JavaScript", "JQuery", "HTML/CSS", "Management"], 
      "biopic": "images/photo.jpg" 
 	}; 
 	  
 	bio.display = function(){ 
 		//adding name and role	 
 		var formattedName = HTMLheaderName.replace("%data%", bio.name); 
 		var formattedRole = HTMLheaderRole.replace("%data%", bio.role); 
 		 		
 		$("#header").prepend(formattedRole); 
 		$("#header").prepend(formattedName); 

  		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile); 
 		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email); 
 		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github); 
 		var formattedLinkedin = HTMLlinkedin.replace("%data%", bio.contacts.linkedin); 
 		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location); 

		
	//adding contacts
	var idStrings = ["#topContacts", "#footerContacts"];
		for (var i = 0, id; i < idStrings.length; i++) {
			id = idStrings[i];
			$(id).append(formattedMobile);
			$(id).append(formattedEmail);
			$(id).append(formattedGithub);
			$(id).append(formattedLinkedin);
			$(id).append(formattedLocation);
			$(id).append(internationalizeButton);
		}

		var formattedMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage); 
 		var formattedPic = HTMLbioPic.replace("%data%", bio.biopic); 
 		$("#header").append(formattedPic); 
 		$("#header").append(formattedMessage); 

	//add skills
		$('#header').append(HTMLskillsStart)
		for (i=0; i < bio.skills.length; i++) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
			$("#skills").append(formattedSkill);
		}
	}

	bio.display();
	

	var work = {
    "jobs": [
		{
	    	"employer": "AT&T",
	    	"title": "Advanced Tech Support Manager",
	    	"location": "Tulsa, OK",
	    	"dates": "April 2004 to present",
	    	"description": "Managing an Inbound Advanced Tech Support Team providing Sales, Service, and Web Support.",
	    	"url": "http://www.att.com"
		},
		{
	    	"employer": "Dentsply, Inc",
	    	"title": "Territory Manager TSM",
	    	"location": "Tulsa, OK",
	    	"dates": "May 2002 to March 2004",
	    	"description": "Managed Rocky Mountain Territory Sales of Endodontic Products to Dentists and Surgeons.",
	    	"url": "http://www.dentsply.com"
		},
		{
	    	"employer": "TV Guide, Inc.",
	    	"title": "Project Manager",
	    	"location": "Tulsa, OK",
	    	"dates": "September 2000 to May 2002",
	    	"description": "Managed the Call Center Project for RCA Gemstar eBooks.",
	    	"url": "http://www.tvguide.com"
		}
  	  ]
	}

	work.display = function () {
    
		$("#workExperience").append(HTMLworkStart);
    	for (job in work.jobs) {
		// console.log('Work object:');
		// console.dir(work.jobs[job]);
		// console.log(work.jobs[job].employer, work.jobs[job].title):
	
		var formattedEmployer = HTMLworkEmployer.replace("#\">%data%",work.jobs[job].url+"\">"+ work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
	
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	
		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDescription);
  	  }
	}

	work.display();

	//log click locations in console
	$(document).click(function(loc) { 
 	 
 	var x = loc.pageX; 
 	var y = loc.pageY; 
 	 
 	logClicks(x,y); 
 	 
 	}); 

	
	var projects = {
    "projects":
		[
	    	 {
				"title": "Project 2",
				"dates": "2014",
				"description": "Create an Online Resume using JavaScript and JQuery",
				"url": "https://github.com/phishtraveler/Assignment-2.git",
				"images": [
					"images/resume.jpg",
					"images/style.jpg"
		 	]
		 	},
		 	{
		 		"title": "Project 3",
		 		"dates": "2015",
				"description": "Finish a Classic Arcade Game Clone",
				"url": "https://github.com/phishtraveler/Assignment-3.git",
				"images": [
					"images/project3.jpg",
					"images/arcade.png"
				]		 
		 	}
    	]
	}
    
   	projects.display = function () {
    
   	for (project in projects.projects) {
   		$("#projects").append(HTMLprojectStart);
	 		
		var formattedTitle = HTMLprojectTitle.replace("#\">%data%",projects.projects[project].url+"\">"+ projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
	 		}
	 	}
	  }
	}

	projects.display();	

	var education = {
		"schools": [
			{
					"name": "Oral Roberts University",
					"degree": "Bachelor of Science in Business Marketing",
					"major": [ "BS Business Marketing", "Psychology"],
					"dates": "From: 1988 To: 1992 ",
					"url": "http://www.oru.edu",
					"location": "Tulsa, OK"
			}
			],
		"onlineCourses" : [
			{
					"title": "Front End Web Developer",
					"school": "Udacity",
					"dates": "2014 - 2015",
					"url" : "http://www.udacity.com/nd001"
			}
		]
	}
	
	education.display = function() {
		    
		education.schools.forEach(function(v,i,a){
		$("#education").append(HTMLschoolStart);
    		
			var formattedSchoolName = HTMLschoolName.replace("#\">%data%",education.schools[i].url+"\">"+ education.schools[i].name);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedSchoolTitle = formattedSchoolName + formattedSchoolDegree;
			
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
			
	
			$(".education-entry:last").append(formattedSchoolTitle);
			$(".education-entry:last").append(formattedSchoolMajor);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			
  	  	})
		$("#education").append(HTMLonlineClasses);
		education.onlineCourses.forEach(function(v,i,a){
			$("#education").append(HTMLschoolStart);  
  			$(".education-entry:last").append(HTMLonlineTitle.replace("#\">%data%", education.onlineCourses[i].url+"\">"+ education.onlineCourses[i].school + education.onlineCourses[i].title));  
  			$(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates));  
  		  
  	})  
 	} 
	
 	education.display();   


	//add google map
	$("#mapDiv").append(googleMap);

 	//internationalize name
 
	function inName(){
    	var firstName = bio.name.split(" ")[0].slice(0,1).toUpperCase() + bio.name.split(" ")[0].slice(1).toLowerCase();
    	var lastName = bio.name.split(" ")[1].toUpperCase();
		return firstName+" "+lastName;
	}