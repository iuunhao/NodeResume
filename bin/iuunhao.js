#!/usr/bin/env node

var color = require('colors-cli/safe'),
	fs = require('fs'),
	path = require('path'),
	infofile = require('./info.json'),
	log = console.log,
	basicinfo = infofile.basicinfo,
	skills = infofile.skills,
	workExperience = infofile.workExperience,
	space2 = "  ",
	space4 = "    ";

function basicInformation() {
	var d = basicinfo.data;
	log();
	log(space2 + color.x46.bold(basicinfo.title + ': ' + (d.name.v || '')));
	log();
	log(space4 + (d.workingTime ? d.workingTime.v + '|' : '') +
		(d.gender ? d.gender.v + '|' : '') +
		(d.birthday ? d.birthday.v + '|' : '') +
		(d.marriage ? d.marriage.v + '|' : '') +
		(d.height ? d.height.v : ''));
	log(space4 + "----------------------------");
	if (d.living) log(space4 + d.living.t + " : " + d.living.v);
	if (d.countries || d.region || d.currentCity || d.postalCode) {
		var address = '' + (d.countries.v || '') + ' ' +
			(d.region.v || '') + ' ' +
			(d.postalCode.v ? ' (邮编: ' + d.postalCode.v + ')' : '');

		log(space4 + "地　址 : " + address);
	}
	if (d.mobile) log(space4 + d.mobile.t + " : " + d.mobile.v);
	if (d.email) log(space4 + d.email.t + " : " + d.email.v);
	if (d.website) log(space4 + d.website.t + " : " + d.website.v);
	if (d.webSite) log(space4 + d.webSite.t + " : " + d.webSite.v);
	if (d.github) log(space4 + d.github.t + " : " + d.github.v);
	if (d.motto) log(space4 + d.motto.t + " : " + d.motto.v);
	log();
}

basicInformation();

function workExperienceFn() {
	var d = workExperience.data;
	log();
	log(space2 + color.x46.bold(workExperience.title));
	for (var i = 0; i < d.length; i++) {
		for (var a in d[i]) {
			if (a === "timePeriod") log(),
				log(space4 + color.x199('■ ') + d[i][a].v),
				log(space4 + "----------------------------");
			else log(space4 + color.x161('› ') + d[i][a].t + " : " + d[i][a].v);
		}
	}
	log();
}
workExperienceFn();

function skillsShow() {
	var d = skills.data;
	log()
	log(space2 + color.x46.bold(skills.title))
	log()
	for (var i = 0; i < d.length; i++) {

		var txt = ''

		for (var a in d[i]) {
			if (d[i][a]) {
				txt += a + ':' + d[i][a] + ' | ';
			}
		}
		log(space4 + color.x161('■ ') + txt)
		log("   ----------------------------");
	};
}

skillsShow();
