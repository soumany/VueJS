import AssignmentList from "./AssignmentList.js";
export default {
    components: {AssignmentList},
    template: `

        <section class="space-y-6">
            <assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>
            <assignment-list :assignments="filters.completed" title="Complete"></assignment-list>
        </section>

        


    `,
    data () {
        return {
            assignments : [
                { name: 'Finish Project', complete: false, id: 1},
                { name: 'Read chapter 4', complete: false, id: 2},
                { name: 'Turn in Homework', complete: false, id: 3},
            ]
        }
    },

    computed: {
    
        filters() {
            return {
                inProgress: this.assignments.filter(assignment => !assignment.complete),
                completed: this.assignments.filter(assignment => assignment.complete),
            }
        }
    }

}