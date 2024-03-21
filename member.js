function skillsMember() {
  return {
    name: 'John Doe',
    age: 30,
    skills: ['JavaScript', 'React', 'Node', 'MongoDB'],
    getSkills: function() {
      return this.skills;
    }
  }
}