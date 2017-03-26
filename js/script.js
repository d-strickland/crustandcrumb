function updateRecipe() {
    let flour_wt = document.getElementById('new_flour_wt').value;
    let water_pct = document.getElementById('water_pct').value;
    let starter_pct = document.getElementById('starter_pct').value;
    let salt_pct = document.getElementById('salt_pct').value;
    let yeast_pct = document.getElementById('yeast_pct').value;

    document.getElementById('flour_wt').innerHTML = flour_wt + ' oz';
    document.getElementById('water_wt').innerHTML = (flour_wt * water_pct / 100) + ' oz';
    document.getElementById('starter_wt').innerHTML = (flour_wt * starter_pct / 100) + ' oz';
    document.getElementById('salt_wt').innerHTML = (flour_wt * salt_pct / 100) + ' oz';
    document.getElementById('yeast_wt').innerHTML = (flour_wt * yeast_pct / 100) + ' oz';
}

