<template>
    <div>
    <div class="table-responsive">
        <b-row>
            <b-col lg="12" md="12" sm="12" xs="12">

        <table class="table">
            <tbody>
            <tr class="account-top">
                <th colspan="2">Address</th>
                <th colspan="2">Verification Status</th>
            </tr>

            <tr class="account-top">
                <td colspan="2">123</td>
                <td colspan="2"><b-icon font-scale="2" icon="check" variant="success" /></td>
            </tr>
            </tbody>
        </table>
            </b-col>
        </b-row>

    </div>

    <hr />

    <div class="table-responsive">
        <table class="table">

            <tbody>

            <tr>
                <th></th>
                <td><b>From</b></td>
                <td><b>To</b></td>
                <td><b>Status</b></td>
            </tr>

            <tr>
                <th>Matrix</th>
                <td>{{ this.$props.searchResult.fields[0].challenge.state.from.address }}</td>
                <td>{{ this.$props.searchResult.fields[0].challenge.state.to.address }}</td>
                <td v-if="this.$props.searchResult.fields[0].challenge.state.status">
                    <b-icon font-scale="2" icon="check" variant="success" />
                </td>
                <td v-else>
                    <b-icon font-scale="2" icon="exclamation-octagon-fill" variant="danger" />
                </td>
            </tr>

            <tr>
                <th>Email</th>
                <td>{{ this.$props.searchResult.fields[1].challenge.state.from.address }}</td>
                <td>{{ this.$props.searchResult.fields[1].challenge.state.to.address }}</td>
                <td v-if="this.$props.searchResult.fields[1].challenge.state.status == 'unconfirmed'">
                    <b-icon font-scale="2" icon="exclamation-octagon-fill" variant="danger" />
                </td>
                <td v-else>
                    <b-icon font-scale="2" icon="check" variant="success" />
                </td>
            </tr>

            </tbody>
        </table>
        </div>

        <hr />

         <div>
        <table class="table">

            <tbody>
            <tr>
                <th>Display Name</th>
                <td>{{ this.$props.searchResult.fields[2].field.address }}</td>
                <td>{{ this.$props.searchResult.fields[2].challenge.state.similarities }}</td>
                <td v-if="this.$props.searchResult.fields[0].challenge.state.status == 'valid'">
                    <b-icon font-scale="2" icon="check" variant="success" />
                </td>
            </tr>

            <tr>
                <th>Legal Name</th>
                <td><b-icon font-scale="2" icon="exclamation-triangle" variant="warning" /></td>
                <td>Peter</td>
                <td>Peter</td>
            </tr>

            <tr>
                <th>Twitter</th>
                <td>@123</td>
                <td>@456</td>
                <td>@789</td>
            </tr>

            </tbody>

        </table>


    </div>

    </div>

</template>

<script>
export default {
    props: ['searchResult'],

    mounted() {
        console.log("mounted call...")
    }
 }

</script>


<style>

.account-top {
    text-align: center;
}

hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.table-responsive {
    margin: 0 auto;
    width: 80%;
    padding-top: 2%;
}

</style>