function joinLJCompany(jobDescription) {

	return {

		jobDescription: jobDescription,

		determinePay: function() {

			return this.jobDescription.reduce((salary, experience) => salary + experience.skill, 0)
		}
	}
}

const jobDescription = [
	{
		linuxsysadmin: 90000,
	},

	{
		linuxsyneng: 120000,
	}
]


const joiner = joinLJCompany(jobDescription)

joiner.determinePay()
