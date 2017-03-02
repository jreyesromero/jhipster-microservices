#!/bin/bash
# Create swarm cluster:
#   - 1 master node
#   - 3 workers
#
manager_node=1
workers_node=3

# First step. Create a dump of our application using docker-compose
# We need to pull all the images indicate in docker-compose.yml for that
docker-compose pull
docker-compose bundle

# Execution of create_swarm_mode_cluster.sh script, indicating how many manager nodes
# and how many workers nodes we want in our cluster.
source ./create_swarm_mode_cluster.sh $manager_nodes $workers_nodes


# Once the cluster has been created, we need to point Docker Cli to swarm master node
eval $(docker-machine env master1)
